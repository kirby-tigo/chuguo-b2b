import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function sendVerificationEmail(email: string, userId: string) {
  const verificationLink = `${process.env.NEXT_PUBLIC_APP_URL}/verify-email?token=${userId}`

  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: email,
    subject: "验证您的邮箱 - 楚果集采",
    html: `
      <h1>欢迎加入楚果集采</h1>
      <p>请点击下面的链接验证您的邮箱：</p>
      <a href="${verificationLink}">${verificationLink}</a>
      <p>如果您没有注册账号，请忽略此邮件。</p>
    `,
  })
}

export async function sendPasswordResetEmail(email: string, token: string) {
  const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${token}`

  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: email,
    subject: "重置密码 - 楚果集采",
    html: `
      <h1>重置密码</h1>
      <p>请点击下面的链接重置您的密码：</p>
      <a href="${resetLink}">${resetLink}</a>
      <p>如果您没有请求重置密码，请忽略此邮件。</p>
      <p>此链接将在1小时后失效。</p>
    `,
  })
}
 