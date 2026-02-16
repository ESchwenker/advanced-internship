"use client"

import { useState } from "react"

import Navbar from "@/components/Navbar"
import Landing from "@/components/Landing"
import Features from "@/components/Features"
import Reviews from "@/components/Reviews"
import Numbers from "@/components/Numbers"
import Footer from "@/components/Footer"

export default function Home() {

  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [signupOpen,setSignupOpen]= useState(false)

  return (
    <>
      <Navbar openLogin={() => window.dispatchEvent(new Event("open-login"))} />

      <Landing openLogin={() => window.dispatchEvent(new Event("open-login"))} />
      <Features />
      <Reviews />
      <Numbers />
      <Footer />
    </>
  )
}
