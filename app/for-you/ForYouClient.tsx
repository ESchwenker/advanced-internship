"use client"

import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useState } from "react"
import Sidebar from "../../components/Sidebar"
import Header from "../../components/Header"
import SelectedHero from "../../components/SelectedHero"
import RecommendedSection from "../../components/RecommendedSection"
import SuggestedSection from "../../components/SuggestedSection"

export default function ForYouClient(){
  const { user, loading } = useAuth()
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {

    if (loading) return;
    const stored = localStorage.getItem("user");

    if (!user && !stored) {
      router.push("/");
    }

  }, [user, loading]);

  return (
    <div className="dashboard">
      <Sidebar open={sidebarOpen} close={() => setSidebarOpen(false)} />

      <main className="dashboard__main">

        <Header toggleSidebar={() => setSidebarOpen(prev => !prev)} />
        <SelectedHero />
        <RecommendedSection />
        <SuggestedSection />

        <div className="dashboard__content"></div>

      </main>
    </div>
  )
}