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

  const [user,setUser] = useState<User>(null)
  const [loading,setLoading] = useState(true)
  const router = useRouter()

  // restore login after refresh
  useEffect(()=>{
    const storedUser = localStorage.getItem("user")
    if(storedUser){
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  },[])

  // ---------- LOGIN ----------
  function login(email:string,password:string){

    // ⭐ DEMO ACCOUNT FOR RECRUITERS
    if(email==="guest@gmail.com" && password==="guest123"){
      const newUser={email}
      setUser(newUser)
      localStorage.setItem("user",JSON.stringify(newUser))
      router.push("/for-you")
      return null
    }

    // invalid email
    if(!email.includes("@")){
      return "Invalid email"
    }

    // short password
    if(password.length < 6){
      return "Short password"
    }

    const storedPass = localStorage.getItem("account_"+email)

    // user does not exist
    if(!storedPass){
      return "User not found"
    }

    // wrong password
    if(storedPass !== password){
      return "User not found"
    }

    const newUser={email}

    setUser(newUser)
    localStorage.setItem("user",JSON.stringify(newUser))

    router.push("/for-you")

    return null
  }

  // ---------- REGISTER ----------
  function register(email:string,password:string){

    if(!email.includes("@")){
      return "Invalid email"
    }

    if(password.length < 6){
      return "Short password"
    }

    localStorage.setItem("account_"+email,password)

    const newUser={email}

    setUser(newUser)
    localStorage.setItem("user",JSON.stringify(newUser))

    router.push("/for-you")

    return null
  }

  // ---------- GUEST BUTTON ----------
  function loginAsGuest(){

    const guestUser={ isGuest:true }

    setUser(guestUser)
    localStorage.setItem("user",JSON.stringify(guestUser))

    router.push("/for-you")
  }

  // ---------- LOGOUT ----------
  function logout(){
    setUser(null)
    localStorage.removeItem("user")
  }

  return(
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

  if(!context){
    throw new Error("useAuth must be used inside AuthProvider")
  }

  return context
}

