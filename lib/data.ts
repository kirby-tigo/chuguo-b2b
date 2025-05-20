import type { User } from "@/types/auth"
import fs from "fs/promises"
import path from "path"
import NodeCache from "node-cache"
import { lock } from "proper-lockfile"
import { retry } from "ts-retry-promise"

const DATA_DIR = path.join(process.cwd(), "data")
const USERS_FILE = path.join(DATA_DIR, "users.json")
const CACHE_TTL = Number(process.env.CACHE_TTL) || 300 // 默认5分钟缓存

// 初始化缓存
const cache = new NodeCache({ stdTTL: CACHE_TTL })

// 初始化数据目录和文件
async function initializeData() {
  try {
    // 确保数据目录存在
    await fs.mkdir(DATA_DIR, { recursive: true })

    // 检查用户文件是否存在
    try {
      await fs.access(USERS_FILE)
    } catch {
      // 如果文件不存在，创建测试用户
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
      await fs.writeFile(USERS_FILE, JSON.stringify([testUser], null, 2))
    }
  } catch (error) {
    console.error("Error initializing data:", error)
    throw new Error("Failed to initialize data")
  }
}

// 在模块加载时初始化数据
initializeData().catch(console.error)

// 读取用户数据
export async function getUsers(): Promise<User[]> {
  try {
    // 尝试从缓存获取
    const cachedUsers = cache.get<User[]>("users")
    if (cachedUsers) return cachedUsers

    const data = await fs.readFile(USERS_FILE, "utf-8")
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
  try {
    await retry(
      async () => {
        const release = await lock(USERS_FILE, { retries: 5 })
        try {
          await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2))
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
  } catch (error) {
    console.error("Error saving users:", error)
    throw new Error("Failed to save users data")
  }
}

// 根据用户名查找用户
export async function findUserByUsername(username: string): Promise<User | undefined> {
  try {
    const users = await getUsers()
    return users.find((user) => user.username === username)
  } catch (error) {
    console.error("Error finding user by username:", error)
    return undefined
  }
}

// 根据邮箱查找用户
export async function findUserByEmail(email: string): Promise<User | undefined> {
  try {
    const users = await getUsers()
    return users.find((user) => user.email === email)
  } catch (error) {
    console.error("Error finding user by email:", error)
    return undefined
  }
}

// 创建新用户
export async function createUser(userData: Omit<User, "id" | "createdAt" | "updatedAt">): Promise<User> {
  try {
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
  } catch (error) {
    console.error("Error creating user:", error)
    throw new Error("Failed to create user")
  }
}

// 更新用户
export async function updateUser(id: string, userData: Partial<User>): Promise<User | undefined> {
  try {
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
  } catch (error) {
    console.error("Error updating user:", error)
    throw new Error("Failed to update user")
  }
}

// 删除用户
export async function deleteUser(id: string): Promise<boolean> {
  try {
    const users = await getUsers()
    const filteredUsers = users.filter((user) => user.id !== id)
    if (filteredUsers.length === users.length) return false
    await saveUsers(filteredUsers)
    return true
  } catch (error) {
    console.error("Error deleting user:", error)
    throw new Error("Failed to delete user")
  }
}
