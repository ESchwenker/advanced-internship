"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type User = {
  email?: string
  isGuest?: boolean
} | null

type AuthContextType = {
  user: User
  loading: boolean
  login: (email: string) => void
  loginAsGuest: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem("user")

    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    
    setLoading(false)
  }, [])

  function login(email: string) {
    const newUser = { email }

    setUser(newUser)
    localStorage.setItem("user", JSON.stringify(newUser))
  }

  function loginAsGuest() {
    const guestUser = { isGuest: true }

    setUser(guestUser)
    localStorage.setItem("user", JSON.stringify(guestUser))
  }

  function logout() {
    setUser(null)
    localStorage.removeItem("user")
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, loginAsGuest, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider")
  }

  return context
}