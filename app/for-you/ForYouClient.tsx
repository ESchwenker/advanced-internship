"use client"

import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Sidebar from "../../components/Sidebar"
import Header from "../../components/Header"
import SelectedHero from "../../components/SelectedHero"
import RecommendedSection from "../../components/RecommendedSection"
import SuggestedSection from "../../components/SuggestedSection"

export default function ForYouClient(){
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {

    if (loading) return;
    const stored = localStorage.getItem("user");

    if (!user && !stored) {
      router.push("/");
    }

  }, [user, loading]);

  return (
    <div className="dashboard">
      <Sidebar />

      <main className="dashboard__main">

        <Header />
        <SelectedHero />
        <RecommendedSection />
        <SuggestedSection />

        <div className="dashboard__content"></div>

      </main>
    </div>
  )
}