"use client";

import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FiClock, FiX } from "react-icons/fi";
import { formatTime } from "@/lib/utils";
import { getAudioDuration } from "@/lib/getAudioDuration";

export default function Header({ toggleSidebar }) {
  console.log("TOGGLE:", toggleSidebar);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const [durations, setDurations] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    async function searchBooks() {
      if (!search.trim()) {
        setResults([]);
        setOpen(false);
        return;
      }

      const res = await fetch(
        `https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${search}`,
      );

      const data = await res.json();

      setResults(Array.isArray(data) ? data : data.books || []);

      setOpen(true);
    }

    const delay = setTimeout(searchBooks, 300);
    return () => clearTimeout(delay);
  }, [search]);

  useEffect(() => {
    async function loadDurations() {
      const newDurations: any = {};

      for (const book of results) {
        if (book.audioLink && !durations[book.id]) {
          try {
            const d = await getAudioDuration(book.audioLink);
            newDurations[book.id] = d;
          } catch {}
        }
      }

      if (Object.keys(newDurations).length) {
        setDurations((prev) => ({ ...prev, ...newDurations }));
      }
    }

    if (results.length) loadDurations();
  }, [results]);

  return (
    <header className="dashboardHeader">
      <div className="dashboardHeader__searchWrapper">
        <div className="dashboardHeader__search">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for books"
          />

          <div
            className="dashboardHeader__icon-wrapper"
            onClick={() => {
              if (search) {
                setSearch("");
                setOpen(false);
              }
            }}
          >
            {search ? (
              <FiX className="dashboardHeader__icon" />
            ) : (
              <FiSearch className="dashboardHeader__icon" />
            )}
          </div>
        </div>

        {open && (
          <div className="searchDropdown">
            {results.length === 0 && (
              <div className="searchEmpty">No books found</div>
            )}

            {results.map((book: any) => (
              <Link
                key={book.id}
                href={`/book/${book.id}`}
                className="searchItem"
                onClick={() => setOpen(false)}
              >
                <img className="search-img" src={book.imageLink} width={60} />

                <div>
                  <div className="search-info">
                    <div className="searchTitle">{book.title}</div>
                    <div className="searchAuthor">{book.author}</div>
                  </div>

                  <div className="search-time">
                    <FiClock /> {formatTime(durations[book.id])}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <button
        className="burger"
        onClick={() => {
          console.log("BURGER CLICKED", toggleSidebar);
          toggleSidebar?.();
        }}
      >
        ☰
      </button>
    </header>
  );
}
