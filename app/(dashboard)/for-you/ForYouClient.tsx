"use client"

import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import SelectedHero from "../../../components/SelectedHero"
import RecommendedSection from "../../../components/RecommendedSection"
import SuggestedSection from "../../../components/SuggestedSection"

export default function ForYouClient(){

  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(()=>{

    if(loading) return

    const stored = localStorage.getItem("user")

    if(!user && !stored){
      router.push("/")
    }

  },[user,loading])

  return (
    <>

      <SelectedHero/>
      <RecommendedSection/>
      <SuggestedSection/>

    </>
  )
}
