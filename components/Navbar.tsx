"use client"

import Link from "next/link"


interface Props {
  openLogin: () => void
}

export default function Navbar({ openLogin }: Props) {

  
  return (
    <nav className="nav">
      <div className="nav__wrapper">

        <figure className="nav__img--mask">
          <img className="nav__img" src="/logo.png" />
        </figure>

        <ul className="nav__list--wrapper">

          <li className="nav__list nav__list--login" onClick={openLogin}>
            Login
          </li>

          <li className="nav__list nav__list--mobile">
            <Link href="/about">About</Link>
          </li>

          <li className="nav__list nav__list--mobile">
            <Link href="/contact">Contact</Link>
          </li>

          <li className="nav__list nav__list--mobile">
            <Link href="/help">Help</Link>
          </li>

        </ul>

      </div>
    </nav>
  )
}