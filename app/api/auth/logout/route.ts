import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST() {
  try {
    // 清除认证 cookie
    const response = NextResponse.json({ success: true })
    response.cookies.delete("auth-token")

    return response
  } catch (error) {
    // 记录错误但不返回具体错误信息
    console.error("Logout error:", error)
    return NextResponse.json(
      { success: false, error: "系统错误，请稍后重试" },
      { status: 500 }
    )
  }
}
