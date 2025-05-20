"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import type { User, LoginCredentials, RegisterData, AuthResponse } from "@/types/auth"
import { toast } from "sonner"

type AuthContextType = {
  user: User | null
  isLoading: boolean
  login: (credentials: LoginCredentials) => Promise<AuthResponse>
  register: (data: RegisterData) => Promise<AuthResponse>
  logout: () => Promise<void>
  isLoggedIn: boolean
  updateUser: (data: Partial<User>) => Promise<boolean>
  resetPassword: (email: string) => Promise<boolean>
  confirmPasswordReset: (token: string, newPassword: string) => Promise<boolean>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // 初始化时从localStorage和sessionStorage加载用户信息
  useEffect(() => {
    let storedUser = localStorage.getItem("user")
    if (!storedUser) {
      storedUser = sessionStorage.getItem("user")
    }
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (e) {
        localStorage.removeItem("user")
        sessionStorage.removeItem("user")
      }
    }
    setIsLoading(false)
  }, [])

  // 登录函数
  const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
    // 只允许 test/123456 登录
    if (credentials.username === "test" && credentials.password === "123456") {
      const user = {
        id: "user-1",
        username: "test",
        name: "测试用户",
        email: "test@example.com",
        phone: "13800138000",
        company: "测试公司",
        role: "buyer" as const,
        avatar: "/placeholder.png",
        emailVerified: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      setUser(user)
      localStorage.setItem("user", JSON.stringify(user))
      toast.success("登录成功")
      router.push("/")
      return { success: true, user }
    } else {
      toast.error("用户名或密码错误，请使用账号：test，密码：123456")
      return { success: false, error: "用户名或密码错误" }
    }
  }

  // 注册函数（仅模拟，直接跳转登录）
  const register = async (data: RegisterData): Promise<AuthResponse> => {
    toast.success("注册成功，请登录")
    router.push("/login")
    return { success: true }
  }

  // 登出函数
  const logout = async () => {
    setUser(null)
    localStorage.removeItem("user")
    sessionStorage.removeItem("user")
    localStorage.removeItem("cart")
    toast.success("已退出登录")
    router.push("/login")
  }

  // 更新用户信息（仅本地）
  const updateUser = async (data: Partial<User>): Promise<boolean> => {
    if (!user) return false
    const updatedUser = { ...user, ...data }
    setUser(updatedUser)
    localStorage.setItem("user", JSON.stringify(updatedUser))
    toast.success("个人信息更新成功")
    return true
  }

  // 重置密码/确认重置密码（静态站点下仅提示）
  const resetPassword = async (email: string): Promise<boolean> => {
    toast.success("重置密码邮件已发送，请查收（模拟）")
    return true
  }
  const confirmPasswordReset = async (token: string, newPassword: string): Promise<boolean> => {
    toast.success("密码重置成功，请重新登录（模拟）")
    router.push("/login")
    return true
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        register,
        logout,
        isLoggedIn: !!user,
        updateUser,
        resetPassword,
        confirmPasswordReset,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
