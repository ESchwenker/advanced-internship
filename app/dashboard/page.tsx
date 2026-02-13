"use client"

import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Sidebar from "../dashboard/Sidebar"
import SummaryCard from "../dashboard/SummaryCard"
import Header from "../dashboard/Header"
import { books } from "@/lib/books"
import SelectedHero from "../dashboard/SelectedHero"
import RecommendedRow from "./RecommendedSection"

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
        <RecommendedRow />

        <div className="dashboard__content">
          <div className="dashboard__grid">
            {books.map(book => (
              <SummaryCard
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                image={book.image}
                category={book.category}
                time={book.time}
              />
            ))}
          </div>
        </div>

      </main>
    </div>
  )
}