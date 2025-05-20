import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { sign } from "jsonwebtoken"
import bcrypt from "bcryptjs"
import type { LoginCredentials, AuthResponse } from "@/types/auth"
import { findUserByUsername } from "@/lib/data"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

export async function POST(request: Request) {
  try {
    const body: LoginCredentials = await request.json()
    const { username, password, rememberMe } = body

    // 验证输入
    if (!username || !password) {
      return NextResponse.json<AuthResponse>(
        { success: false, error: "请填写所有必填字段" },
        { status: 400 },
      )
    }

    // 查找用户
    const user = await findUserByUsername(username)

    if (!user) {
      return NextResponse.json<AuthResponse>(
        { success: false, error: "登录失败" },
        { status: 401 },
      )
    }

    // 验证密码
    const isValidPassword = await bcrypt.compare(password, user.password || "")
    if (!isValidPassword) {
      return NextResponse.json<AuthResponse>(
        { success: false, error: "登录失败" },
        { status: 401 },
      )
    }

    // 生成 JWT token
    const token = sign(
      { userId: user.id, role: user.role },
      JWT_SECRET,
      { expiresIn: rememberMe ? "30d" : "1d" },
    )

    // 创建响应
    const response = NextResponse.json<AuthResponse>({
      success: true,
      user: {
        ...user,
        password: undefined, // 移除密码字段
      },
      token,
    })

    // 设置 cookie
    response.cookies.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: rememberMe ? 30 * 24 * 60 * 60 : 24 * 60 * 60, // 30 days or 1 day
    })

    return response
  } catch (error) {
    // 记录错误但不返回具体错误信息
    console.error("Login error:", error)
    return NextResponse.json<AuthResponse>(
      { success: false, error: "系统错误，请稍后重试" },
      { status: 500 },
    )
  }
}
