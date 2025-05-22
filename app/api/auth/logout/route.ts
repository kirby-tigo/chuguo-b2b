import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST() {
  try {
    // 清除认证 cookie
    const response = NextResponse.json({ success: true })
    response.cookies.delete("auth-token")
    return response
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "退出失败，请稍后重试" },
      { status: 500 }
    )
  }
}
