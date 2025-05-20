import { User } from '@/types/auth'
import { hash } from 'bcryptjs'
import fs from 'fs'
import path from 'path'

const DATA_DIR = path.join(process.cwd(), 'data')
const USERS_FILE = path.join(DATA_DIR, 'users.json')

// 确保数据目录存在
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true })
}

// 如果用户文件不存在，创建一个包含测试用户的文件
if (!fs.existsSync(USERS_FILE)) {
  const testUser: User = {
    id: 'user-1',
    username: 'test',
    name: '测试用户',
    email: 'test@example.com',
    phone: '13800138000',
    company: '测试公司',
    role: 'buyer',
    avatar: '/asian-businessman-portrait.png',
    emailVerified: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  fs.writeFileSync(USERS_FILE, JSON.stringify([testUser], null, 2))
}

// 读取用户数据
export function getUsers(): User[] {
  try {
    const data = fs.readFileSync(USERS_FILE, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading users file:', error)
    return []
  }
}

// 保存用户数据
export function saveUsers(users: User[]) {
  try {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2))
  } catch (error) {
    console.error('Error saving users file:', error)
  }
}

// 根据用户名查找用户
export function findUserByUsername(username: string): User | undefined {
  const users = getUsers()
  return users.find(user => user.username === username)
}

// 根据邮箱查找用户
export function findUserByEmail(email: string): User | undefined {
  const users = getUsers()
  return users.find(user => user.email === email)
}

// 创建新用户
export async function createUser(userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User> {
  const users = getUsers()
  const newUser: User = {
    ...userData,
    id: `user-${users.length + 1}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  users.push(newUser)
  saveUsers(users)
  return newUser
}

// 更新用户
export function updateUser(id: string, userData: Partial<User>): User | undefined {
  const users = getUsers()
  const index = users.findIndex(user => user.id === id)
  if (index === -1) return undefined

  const updatedUser = {
    ...users[index],
    ...userData,
    updatedAt: new Date().toISOString(),
  }
  users[index] = updatedUser
  saveUsers(users)
  return updatedUser
}

// 删除用户
export function deleteUser(id: string): boolean {
  const users = getUsers()
  const filteredUsers = users.filter(user => user.id !== id)
  if (filteredUsers.length === users.length) return false
  saveUsers(filteredUsers)
  return true
} 