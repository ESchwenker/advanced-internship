"use client"

import { useEffect, useState } from "react"
import BookCarouselCard from "./BookCarouselCard"
import { formatTime } from "@/lib/utils"
import { getAudioDuration } from "@/lib/getAudioDuration"

export default function SuggestedSection() {
  const [books, setBooks] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchBooks() {
      try {
        const res = await fetch(
          "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested"
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
        console.error("Failed to fetch suggested books:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchBooks()
  }, [])

  if (loading) return <p>Loading suggested books...</p>

  return (
    <section className="recommended">

      <h2 className="sectionTitle">Suggested Books</h2>
      
      <p className="sectionSubtitle">
        Browse those books
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