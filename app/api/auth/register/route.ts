import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import type { RegisterData, AuthResponse } from "@/types/auth"
import { findUserByUsername, findUserByEmail, createUser } from "@/lib/data"

export async function POST(request: Request) {
  try {
    const body: RegisterData = await request.json()
    const { username, password, confirmPassword, email, name, phone, company, role } = body

    // 验证输入
    if (!username || !password || !email || !name || !phone || !company) {
      return NextResponse.json<AuthResponse>(
        { success: false, error: "请填写所有必填字段" },
        { status: 400 }
      )
    }

    if (password !== confirmPassword) {
      return NextResponse.json<AuthResponse>(
        { success: false, error: "密码不匹配" },
        { status: 400 }
      )
    }

    // 检查用户名是否已存在
    if (await findUserByUsername(username)) {
      return NextResponse.json<AuthResponse>(
        { success: false, error: "注册失败" },
        { status: 400 }
      )
    }

    // 检查邮箱是否已存在
    if (await findUserByEmail(email)) {
      return NextResponse.json<AuthResponse>(
        { success: false, error: "注册失败" },
        { status: 400 }
      )
    }

    // 加密密码
    const hashedPassword = await bcrypt.hash(password, 10)

    // 创建用户
    const user = await createUser({
      username,
      name,
      email,
      phone,
      company,
      role: role || "buyer",
      emailVerified: false,
      password: hashedPassword,
    })

    // 返回成功响应（不包含密码）
    const { password: _, ...userWithoutPassword } = user
    return NextResponse.json<AuthResponse>({
      success: true,
      user: userWithoutPassword,
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "注册失败，请稍后重试" },
      { status: 500 }
    )
  }
}
