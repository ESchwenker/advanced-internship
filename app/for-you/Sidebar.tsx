"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation";

import {
  FiHome,
  FiBookmark,
  FiEdit,
  FiSearch,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
} from "react-icons/fi"

export default function Sidebar({ setFontSize, activeFont, setActiveFont }: any) {
  const pathname = usePathname()
  const { user, logout } = useAuth()
  const router = useRouter();

  function active(path: string) {
  return pathname === path || pathname.startsWith(path + "/")
    ? "sidebar__link sidebar__link--active"
    : "sidebar__link"
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

            <Link
              href="/for-you"
              className={active("/for-you")}
              onClick={(e)=>{
                if(!user){
                  e.preventDefault();
                  router.push("/settings");
                }
              }}
            >
              <FiHome />
              <span>For you</span>
            </Link>

            <Link
              href="/library"
              className={active("/library")}
              onClick={(e)=>{
                if(!user){
                  e.preventDefault();
                  router.push("/settings");
                }
              }}
            >
              <FiBookmark />
              <span>My Library</span>
            </Link>

            <Link href="/for-you/highlights" className={active("/for-you/highlights")}>
              <FiEdit />
              <span>Highlights</span>
            </Link>

            <Link href="/for-you/search" className={active("/for-you/search")}>
              <FiSearch />
              <span>Search</span>
            </Link>

          </nav>
          {setFontSize && (
            <div className="sidebar__fontControls">

              <button
                className={activeFont===0 ? "btn1 active" : "btn1"}
                onClick={()=>{ setFontSize(16); setActiveFont(0); }}
              >
                Aa
              </button>

              <button
                className={activeFont===1 ? "btn2 active" : "btn2"}
                onClick={()=>{ setFontSize(18); setActiveFont(1); }}
              >
                Aa
              </button>

              <button
                className={activeFont===2 ? "btn3 active" : "btn3"}
                onClick={()=>{ setFontSize(22); setActiveFont(2); }}
              >
                Aa
              </button>

              <button
                className={activeFont===3 ? "btn4 active" : "btn4"}
                onClick={()=>{ setFontSize(24); setActiveFont(3); }}
              >
                Aa
              </button>

            </div>
          )}
          <nav className="sidebar__nav-bottom">

                <Link href="/settings" className={active("/settings")}>
                    <FiSettings />
                    <span>Settings</span>
                </Link>

                <Link href="/for-you/help" className={active("/for-you/help")}>
                    <FiHelpCircle />
                    <span>Help & Support</span>
                </Link>

                <button
                  className="sidebar__link sidebar__logout"
                  onClick={()=>{
                    if(user){
                      logout();
                    } else {
                      window.dispatchEvent(new Event("open-login"));
                    }
                  }}
                >
                  <FiLogOut />
                  <span>{user ? "Logout" : "Login"}</span>
                </button>
          </nav>
      </div>

    </aside>
  )
}
