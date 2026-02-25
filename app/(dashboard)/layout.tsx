"use client"

import { useState } from "react"
import Sidebar from "@/components/Sidebar"
import Header from "@/components/Header"
import { FontProvider } from "@/context/FontContext"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  function toggleSidebar(){
    console.log("TOGGLE RUNNING")
    setSidebarOpen(prev => !prev)
  }

  return (
    <FontProvider>
      <div className="dashboard">

        <Sidebar
          open={sidebarOpen}
          close={() => setSidebarOpen(false)}
        />

        <main className="dashboard__main">

          <Header toggleSidebar={toggleSidebar} />

          {children}

        </main>

      </div>
    </FontProvider>
  )
}



