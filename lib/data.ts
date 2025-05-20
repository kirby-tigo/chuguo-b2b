import type { User } from "@/types/auth"
import fs from "fs"
import path from "path"
import NodeCache from "node-cache"
import { lock } from "proper-lockfile"
import { retry } from "ts-retry-promise"

const DATA_DIR = path.join(process.cwd(), "data")
const USERS_FILE = path.join(DATA_DIR, "users.json")
const CACHE_TTL = Number(process.env.CACHE_TTL) || 300 // 默认5分钟缓存

// 初始化缓存
const cache = new NodeCache({ stdTTL: CACHE_TTL })

// 确保数据目录存在
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true })
}

// 如果用户文件不存在，创建一个包含测试用户的文件
if (!fs.existsSync(USERS_FILE)) {
  const testUser: User = {
    id: "user-1",
    username: "test",
    name: "测试用户",
    email: "test@example.com",
    phone: "13800138000",
    company: "测试公司",
    role: "buyer",
    avatar: "/asian-businessman-portrait.png",
    emailVerified: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  fs.writeFileSync(USERS_FILE, JSON.stringify([testUser], null, 2))
}

// 读取用户数据
export async function getUsers(): Promise<User[]> {
  // 尝试从缓存获取
  const cachedUsers = cache.get<User[]>("users")
  if (cachedUsers) return cachedUsers

  try {
    const data = await fs.promises.readFile(USERS_FILE, "utf-8")
    const users = JSON.parse(data)
    // 更新缓存
    cache.set("users", users)
    return users
  } catch (error) {
    console.error("Error reading users file:", error)
    return []
  }
}

// 保存用户数据
export async function saveUsers(users: User[]): Promise<void> {
  return retry(
    async () => {
      const release = await lock(USERS_FILE, { retries: 5 })
      try {
        await fs.promises.writeFile(USERS_FILE, JSON.stringify(users, null, 2))
        // 更新缓存
        cache.set("users", users)
      } finally {
        await release()
      }
    },
    {
      retries: 3,
      backoff: "EXPONENTIAL",
      timeout: 5000,
    },
  )
}

// 根据用户名查找用户
export async function findUserByUsername(username: string): Promise<User | undefined> {
  const users = await getUsers()
  return users.find((user) => user.username === username)
}

// 根据邮箱查找用户
export async function findUserByEmail(email: string): Promise<User | undefined> {
  const users = await getUsers()
  return users.find((user) => user.email === email)
}

// 创建新用户
export async function createUser(userData: Omit<User, "id" | "createdAt" | "updatedAt">): Promise<User> {
  const users = await getUsers()
  const newUser: User = {
    ...userData,
    id: `user-${users.length + 1}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  users.push(newUser)
  await saveUsers(users)
  return newUser
}

// 更新用户
export async function updateUser(id: string, userData: Partial<User>): Promise<User | undefined> {
  const users = await getUsers()
  const index = users.findIndex((user) => user.id === id)
  if (index === -1) return undefined

  const updatedUser = {
    ...users[index],
    ...userData,
    updatedAt: new Date().toISOString(),
  }
  users[index] = updatedUser
  await saveUsers(users)
  return updatedUser
}

// 删除用户
export async function deleteUser(id: string): Promise<boolean> {
  const users = await getUsers()
  const filteredUsers = users.filter((user) => user.id !== id)
  if (filteredUsers.length === users.length) return false
  await saveUsers(filteredUsers)
  return true
}
