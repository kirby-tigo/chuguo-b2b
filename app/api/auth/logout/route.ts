import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST() {
  try {
    // 清除认证 cookie
    const cookieStore = cookies()
    cookieStore.delete('auth-token')

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Logout error:', error)
    return NextResponse.json(
      { success: false, error: '退出失败，请稍后重试' },
      { status: 500 }
    )
  }
} 