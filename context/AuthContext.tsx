"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { useRouter } from "next/navigation"

type User = {
  email?: string
  isGuest?: boolean
} | null

type AuthContextType = {
  user: User
  loading: boolean
  login: (email: string, password: string) => string | null
  register: (email: string, password: string) => string | null
  loginAsGuest: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {

  const [user, setUser] = useState<User>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) setUser(JSON.parse(storedUser))
    setLoading(false)
  }, [])

  // ✅ VALIDATION
  function validate(email:string,password:string){

    if(!email.includes("@")) return "Invalid email"
    if(password.length < 6) return "Short password"

    return null
  }

  // ✅ LOGIN
  function login(email: string, password: string){

    if(!email.includes("@")) return "Invalid email"

    const storedPass = localStorage.getItem("account_"+email)

    if(!storedPass || storedPass !== password){
      return "User not found"
    }

    const newUser = { email }

    setUser(newUser)
    localStorage.setItem("user", JSON.stringify(newUser))

    router.push("/for-you")

    return null
  }

  // ✅ REGISTER
  function register(email:string,password:string){

    const err = validate(email,password)
    if(err) return err

    localStorage.setItem("account_"+email,password)

    const newUser = { email }

    setUser(newUser)
    localStorage.setItem("user", JSON.stringify(newUser))

    router.push("/for-you")

    return null
  }

  // ✅ GUEST LOGIN
  function loginAsGuest(){

    const guestUser = { isGuest: true }

    setUser(guestUser)
    localStorage.setItem("user", JSON.stringify(guestUser))

    router.push("/for-you")
  }

  function logout(){
    setUser(null)
    localStorage.removeItem("user")
  }

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      login,
      register,
      loginAsGuest,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){

  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider")
  }

  return context
}
