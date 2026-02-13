"use client"

import { useAuth } from "@/context/AuthContext"
import Link from "next/link"


interface Props {
  openLogin: () => void
}

export default function Navbar({ openLogin }: Props) {

  const { user, logout } = useAuth()
  
  return (
    <nav className="nav">
      <div className="nav__wrapper">

        <figure className="nav__img--mask">
          <img className="nav__img" src="/logo.png" />
        </figure>

        <ul className="nav__list--wrapper">
          {!user ? (
            <li className="nav__list nav__list--login" onClick={openLogin}>
              Login
            </li>
          ) : (
            <>
              <li className="nav__list">
                <Link href="/dashboard">Dashboard</Link>
              </li>

              <li
                className="nav__list"
                onClick={logout}
                style={{ cursor: "pointer" }}
              >
                Logout
              </li>
            </>
          )}
        </ul>

      </div>
    </nav>
  )
}