"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "@/context/AuthContext"

import {
  FiHome,
  FiBookmark,
  FiEdit,
  FiSearch,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
} from "react-icons/fi"

export default function Sidebar() {
  const pathname = usePathname()
  const { logout } = useAuth()

  function active(path: string) {
    return pathname === path ? "sidebar__link sidebar__link--active" : "sidebar__link"
  }

  return (
    <aside className="sidebar">
        <div className="sidebar__top">
            <div className="sidebar__brand">
                <img src="/logo.png" alt="logo" className="sidebar__logo-img" />
            </div>
        </div>
        <div className="sidebar__tabs">
          <nav className="sidebar__nav">

            <Link href="/dashboard" className={active("/dashboard")}>
              <FiHome />
              <span>For you</span>
            </Link>

            <Link href="/dashboard/library" className={active("/dashboard/library")}>
              <FiBookmark />
              <span>My Library</span>
            </Link>

            <Link href="/dashboard/highlights" className={active("/dashboard/highlights")}>
              <FiEdit />
              <span>Highlights</span>
            </Link>

            <Link href="/dashboard/search" className={active("/dashboard/search")}>
              <FiSearch />
              <span>Search</span>
            </Link>

          </nav>
          <nav className="sidebar__nav-bottom">

                <Link href="/dashboard/settings" className={active("/dashboard/settings")}>
                    <FiSettings />
                    <span>Settings</span>
                </Link>

                <Link href="/dashboard/help" className={active("/dashboard/help")}>
                    <FiHelpCircle />
                    <span>Help & Support</span>
                </Link>

                <button className="sidebar__link sidebar__logout" onClick={logout}>
                    <FiLogOut />
                    <span>Logout</span>
                </button>
          </nav>
      </div>

    </aside>
  )
}
