"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { FaPlay } from "react-icons/fa"
import { formatTimeVerbose } from "@/lib/utils"
import { getAudioDuration } from "@/lib/getAudioDuration"

export default function SelectedHero() {

  const [book, setBook] = useState<any>(null)
  const [bookDuration, setBookDuration] = useState(0)

  useEffect(() => {

    async function fetchSelected() {

      const res = await fetch(
        "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected"
      )

      const data = await res.json()

      const selected = data[0] 
      setBook(data[0])

      const seconds = await getAudioDuration(data[0].audioLink)
        setBookDuration(seconds)
    }

    fetchSelected()

  }, [])

  if (!book) return null

  return (
    <section className="selectedHero">

      <h2 className="sectionTitle">Selected just for you</h2>

      <div className="selectedHero__card">

        {/* LEFT TEXT */}
        <div className="selectedHero__left">
          <p>{book.subTitle}</p>
        </div>

        {/* BOOK IMAGE */}
        <div className="selectedHero__image">
          <Image
            src={book.imageLink}
            alt={book.title}
            width={140}
            height={145}
          />
        </div>

        {/* RIGHT INFO */}
        <div className="selectedHero__right">

          <h3>{book.title}</h3>
          <p className="selectedHero__author">{book.author}</p>

          <div className="selectedHero__audio">
            <div className="selectedHero__play">
              <FaPlay />
            </div>

            <span className="selectedHero__timer">{formatTimeVerbose(bookDuration)}</span>

          </div>

        </div>

      </div>

    </section>
  )
}