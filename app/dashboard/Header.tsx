"use client"

import { FiSearch } from "react-icons/fi"
import { useState } from "react"

export default function Header() {
  const [query, setQuery] = useState("")

  return (
    <header className="dashboardHeader">

      <div className="dashboardHeader__search">

        <input
          type="text"
          placeholder="Search for books"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="dashboardHeader__icon-wrapper">
          <FiSearch className="dashboardHeader__icon" />
        </div>

      </div>

    </header>
  )
}