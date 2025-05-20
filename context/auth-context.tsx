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

  // 初始化时从localStorage加载用户信息
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (e) {
        console.error("Failed to parse stored user", e)
        localStorage.removeItem("user")
      }
    }
    setIsLoading(false)
  }, [])

  // 登录函数
  const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      })

      const data: AuthResponse = await response.json()

      if (data.success && data.user) {
        setUser(data.user)
        localStorage.setItem("user", JSON.stringify(data.user))
        toast.success("登录成功")
        router.push("/")
      } else {
        toast.error(data.error || "登录失败")
      }

      return data
    } catch (error) {
      console.error("Login error:", error)
      toast.error("登录失败，请稍后重试")
      return { success: false, error: "登录失败，请稍后重试" }
    }
  }

  // 注册函数
  const register = async (data: RegisterData): Promise<AuthResponse> => {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result: AuthResponse = await response.json()

      if (result.success) {
        toast.success("注册成功，请登录")
        router.push("/login")
      } else {
        toast.error(result.error || "注册失败")
      }

      return result
    } catch (error) {
      console.error("Register error:", error)
      toast.error("注册失败，请稍后重试")
      return { success: false, error: "注册失败，请稍后重试" }
    }
  }

  // 登出函数
  const logout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      })

      const result = await response.json()

      if (result.success) {
        setUser(null)
        localStorage.removeItem("user")
        localStorage.removeItem("cart")
        toast.success("已退出登录")
        router.push("/login")
      } else {
        toast.error(result.error || "退出失败")
      }
    } catch (error) {
      console.error("Logout error:", error)
      toast.error("退出失败，请稍后重试")
    }
  }

  // 更新用户信息
  const updateUser = async (data: Partial<User>): Promise<boolean> => {
    try {
      const response = await fetch("/api/auth/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success && result.user) {
        setUser(result.user)
        localStorage.setItem("user", JSON.stringify(result.user))
        toast.success("个人信息更新成功")
        return true
      } else {
        toast.error(result.error || "更新失败")
        return false
      }
    } catch (error) {
      console.error("Update user error:", error)
      toast.error("更新失败，请稍后重试")
      return false
    }
  }

  // 重置密码请求
  const resetPassword = async (email: string): Promise<boolean> => {
    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const result = await response.json()

      if (result.success) {
        toast.success("重置密码邮件已发送，请查收")
        return true
      } else {
        toast.error(result.error || "发送重置密码邮件失败")
        return false
      }
    } catch (error) {
      console.error("Reset password error:", error)
      toast.error("发送重置密码邮件失败，请稍后重试")
      return false
    }
  }

  // 确认重置密码
  const confirmPasswordReset = async (token: string, newPassword: string): Promise<boolean> => {
    try {
      const response = await fetch("/api/auth/confirm-reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, newPassword }),
      })

      const result = await response.json()

      if (result.success) {
        toast.success("密码重置成功，请重新登录")
        router.push("/login")
        return true
      } else {
        toast.error(result.error || "密码重置失败")
        return false
      }
    } catch (error) {
      console.error("Confirm reset password error:", error)
      toast.error("密码重置失败，请稍后重试")
      return false
    }
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
