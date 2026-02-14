"use client"

import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Sidebar from "../dashboard/Sidebar"
import Header from "../dashboard/Header"
import SelectedHero from "../dashboard/SelectedHero"
import RecommendedSection from "./RecommendedSection"
import SuggestedSection from "./SuggestedSection"

export default function Dashboard() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/")
    }
  }, [user, loading])

  if (loading) {
    return <p>Loading...</p>
  }

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