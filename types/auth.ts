export type UserRole = 'buyer' | 'supplier' | 'admin'

export interface User {
  id: string
  username: string
  name: string
  email: string
  phone: string
  company: string
  role: UserRole
  avatar?: string
  emailVerified: boolean
  createdAt: string
  updatedAt: string
}

export interface LoginCredentials {
  username: string
  password: string
  rememberMe?: boolean
}

export interface RegisterData extends Omit<User, 'id' | 'emailVerified' | 'createdAt' | 'updatedAt'> {
  password: string
  confirmPassword: string
}

export interface AuthResponse {
  success: boolean
  error?: string
  user?: User
  token?: string
}

export interface PasswordResetRequest {
  email: string
}

export interface PasswordResetConfirm {
  token: string
  newPassword: string
  confirmPassword: string
} 