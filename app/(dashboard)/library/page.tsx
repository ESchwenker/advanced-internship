"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiStar, FiClock } from "react-icons/fi";
import { getAudioDuration } from "@/lib/getAudioDuration";
import { formatTime } from "@/lib/utils";
import Loading from "./loading";

export default function LibraryPage() {

  const [books, setBooks] = useState<any[]>([]);
  const [durations, setDurations] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function load(){

      const saved = JSON.parse(localStorage.getItem("savedBooks") || "[]");

      setBooks(saved);

      const durationEntries = await Promise.all(
        saved.map(async (book:any)=>{
          if(!book.audioLink) return [book.id,"00:00"];

          try{
            const seconds = await getAudioDuration(book.audioLink);
            return [book.id, formatTime(seconds)];
          }catch{
            return [book.id,"00:00"];
          }
        })
      );

      setDurations(Object.fromEntries(durationEntries));
      setLoading(false);

    }

    load();

  },[]);

  if(loading) return <Loading/>;

  return (

    <div className="dashboard__content library__content">

      <h1 className="library__title">Saved Books</h1>

      <p className="library__count">
        {books.length} {books.length === 1 ? "item" : "items"}
      </p>

      {books.length===0 && (
        <div className="noSavedBooks" style={{marginTop:"60px"}}>
          <h3 className="noSaved__title">Save your favorite books!</h3>
          <p className="noSaved__para">
            When you save a book, it will appear here.
          </p>
        </div>
      )}

      <div className="libraryGrid">
        {books.map((book)=>(
          <Link key={book.id} href={`/book/${book.id}`}>
            <div className="libraryCard">

              <Image
                src={book.imageLink}
                alt={book.title}
                width={180}
                height={180}
              />

              <h3 className="library-bookTitle">{book.title}</h3>

              <p className="library-bookAuthor">{book.author}</p>

              <p className="library-bookSubtitle">{book.subTitle}</p>

              <div className="libraryMeta">
                <span className="library__icon">
                  <FiClock/> {durations[book.id] || "..."}
                </span>

                <span className="library__icon">
                  <FiStar/> {book.averageRating}
                </span>
              </div>

            </div>
          </Link>
        ))}
      </div>

    </div>

  );
}

