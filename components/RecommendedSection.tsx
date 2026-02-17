"use client"

import { useEffect, useState } from "react"
import BookCarouselCard from "./BookCarouselCard"
import { formatTime } from "@/lib/utils"
import { getAudioDuration } from "@/lib/getAudioDuration"

export default function RecommendedSection() {

  const [books, setBooks] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    async function fetchBooks() {
      try {

        const res = await fetch(
          "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended"
        )

        const data = await res.json()

        const booksWithDuration = await Promise.all(
          data.map(async (book: any) => {
            const duration = await getAudioDuration(book.audioLink)

            return {
              ...book,
              audioLength: duration
            }
          })
        )

        setBooks(booksWithDuration)

      } catch (error) {
        console.error("Failed to fetch recommended books:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchBooks()

  }, [])

  if (loading) return <p>Loading recommended books...</p>

  return (
    <section className="recommended">

      <h2 className="sectionTitle">Recommended For You</h2>

      <p className="sectionSubtitle">
        We think you’ll like these
      </p>

      <div className="recommended__scroll">

        {books.map((book) => (
          <BookCarouselCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            description={book.subTitle}
            image={book.imageLink}
            time={formatTime(book.audioLength)}
            rating={book.averageRating}
            subscriptionRequired={book.subscriptionRequired}
          />
        ))}

      </div>

    </section>
  )
}