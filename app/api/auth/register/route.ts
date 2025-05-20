import { NextResponse } from 'next/server'
import { RegisterData, AuthResponse } from '@/types/auth'
import { findUserByUsername, findUserByEmail, createUser } from '@/lib/data'

export async function POST(request: Request) {
  try {
    const body: RegisterData = await request.json()
    const { username, password, confirmPassword, email, name, phone, company, role } = body

    // 验证输入
    if (!username || !password || !email || !name || !phone || !company) {
      return NextResponse.json<AuthResponse>(
        { success: false, error: '所有字段都是必填的' },
        { status: 400 }
      )
    }

    if (password !== confirmPassword) {
      return NextResponse.json<AuthResponse>(
        { success: false, error: '两次输入的密码不一致' },
        { status: 400 }
      )
    }

    // 检查用户名是否已存在
    if (findUserByUsername(username)) {
      return NextResponse.json<AuthResponse>(
        { success: false, error: '用户名已被注册' },
        { status: 400 }
      )
    }

    // 检查邮箱是否已存在
    if (findUserByEmail(email)) {
      return NextResponse.json<AuthResponse>(
        { success: false, error: '邮箱已被注册' },
        { status: 400 }
      )
    }

    // 创建用户
    const user = await createUser({
      username,
      name,
      email,
      phone,
      company,
      role: role || 'buyer',
      emailVerified: false,
    })

    // 返回成功响应
    return NextResponse.json<AuthResponse>({
      success: true,
      user
    })
  } catch (error) {
    console.error('Register error:', error)
    return NextResponse.json<AuthResponse>(
      { success: false, error: '注册失败，请稍后重试' },
      { status: 500 }
    )
  }
} 