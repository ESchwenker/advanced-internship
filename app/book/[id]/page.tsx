"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import Sidebar from "@/components/Sidebar"
import Header from "@/components/Header"
import Image from "next/image"
import { formatTime } from "@/lib/utils"
import { getAudioDuration } from "@/lib/getAudioDuration"
import { FaMicrophone, FaLightbulb, FaBookmark } from "react-icons/fa"
import { FiStar, FiClock, FiBookmark, FiBookOpen } from "react-icons/fi"
import Link from "next/link"

export default function BookPage() {

  const params = useParams()
  const id = params?.id as string

  const [book, setBook] = useState<any>(null)
  const [duration, setDuration] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [saved,setSaved] = useState(false);

  function toggleSave(){

    const savedBooks = JSON.parse(localStorage.getItem("savedBooks") || "[]");

    if(saved){

      const updated = savedBooks.filter((b:any)=>b.id !== book.id);
      localStorage.setItem("savedBooks",JSON.stringify(updated));
      setSaved(false);

    } else {

      if(!savedBooks.find((b:any)=>b.id===book.id)){
        savedBooks.push(book);
      }

      localStorage.setItem("savedBooks",JSON.stringify(savedBooks));
      setSaved(true);

    }

  }

  useEffect(() => {

    async function fetchBook() {

      try {

        const res = await fetch(
          `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
        )

        const data = await res.json()

        setBook(data)

        if (data.audioLink) {
          const d = await getAudioDuration(data.audioLink)
          setDuration(d)
        }

      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    if (id) fetchBook()

  }, [id])

  useEffect(()=>{

    if(!book) return;

    const savedBooks = JSON.parse(localStorage.getItem("savedBooks") || "[]");

    const exists = savedBooks.find((b:any)=>b.id === book.id);

    if(exists) setSaved(true);

  },[book]);


  if (loading) return <p>Loading...</p>
  if (!book) return <p>Book not found</p>


  return (
    <div className="dashboard">

      <Sidebar />

      <div className="dashboard__main">

        <Header />

        <div className="dashboard__content">

          {/* ===== TOP SECTION ===== */}

          <div className="bookTop">

            <div className="bookTop__left">

              <h1 className="bookTitle">{book.title}</h1>

              <p className="bookAuthor">{book.author}</p>

              <p className="bookSubtitle">{book.subTitle}</p>

              <div className="book-page__divider"></div>

              <div className="bookMeta">
                    <div className="bookMeta-one">
                        <div className="book-icon">
                        <FiStar /> {book.averageRating} ({book.totalRating} ratings)
                        </div>

                        <div className="book-icon">
                        <FaMicrophone /> {book.type}
                        </div>
                    </div>

                    <div className="bookMeta-two">              
                        {duration && (
                        <div className="book-icon">
                            <FiClock /> {formatTime(duration)}
                        </div>
                        )}

                        <div className="book-icon">
                            <FaLightbulb /> {book.keyIdeas} Key ideas
                        </div>
                    </div>

              </div>

              <div className="book-page__divider"></div>

              {/* BUTTONS */}

              <div className="bookButtons">

                <Link href={`/player/${book.id}`}>
                <button className="bookBtn">
                    <FiBookOpen /> Read
                </button>
                </Link>

                <Link href={`/player/${book.id}`}>
                <button className="bookBtn">
                    <FaMicrophone /> Listen
                </button>
                </Link>

              </div>

              <p
                className="bookLibrary"
                onClick={toggleSave}
                style={{cursor:"pointer"}}
              >
                {saved ? <FaBookmark /> : <FiBookmark />}
                {saved ? " Saved in My Library" : " Add title to My Library"}
              </p>

            </div>


            {/* RIGHT IMAGE */}

            <div className="bookTop__right">

              <Image
                src={book.imageLink}
                alt={book.title}
                width={290}
                height={300}
              />

            </div>

          </div>


          {/* ===== TAGS ===== */}

          <h3 className="bookSection">What's it about?</h3>

          <div className="bookTags">

            {book.tags?.map((tag: string) => (
              <span key={tag} className="bookTag">{tag}</span>
            ))}

          </div>


          {/* ===== SUMMARY ===== */}

          <p className="bookSummary">
            {book.bookDescription}
          </p>

          <h3 className="bookSection">About the author</h3>

          <p className="bookSummary bookSummary__author">
            {book.authorDescription}
          </p>


        </div>

      </div>

    </div>
  )
}
