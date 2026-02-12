"use client"

import { useState } from "react"

import Navbar from "@/components/Navbar"
import Landing from "@/components/Landing"
import Features from "@/components/Features"
import Reviews from "@/components/Reviews"
import Numbers from "@/components/Numbers"
import Footer from "@/components/Footer"
import LoginModal from "@/components/LoginModal"

export default function Home() {

  const [isLoginOpen, setIsLoginOpen] = useState(false)

  return (
    <>
      <Navbar openLogin={() => setIsLoginOpen(true)} />

      <Landing openLogin={() => setIsLoginOpen(true)} />
      <Features />
      <Reviews />
      <Numbers />
      <Footer />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </>
  )
}
