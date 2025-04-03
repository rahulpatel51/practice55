"use client"

import type React from "react"

import { useState } from "react"
import { Bell, Search } from "lucide-react"
import Sidebar from "@/components/dashboard/sidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock user data
  const user = {
    name: "Admin User",
    email: "admin@adminhub.com",
    avatar: "/placeholder.svg?height=40&width=40",
  }

  return (
    <div className="flex h-screen bg-[#0f172a] text-white">
      <Sidebar user={user} />

      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-16 items-center justify-between border-b border-gray-800 bg-[#0f172a]/80 px-6 backdrop-blur-sm">
          <div className="flex flex-1 items-center lg:ml-64">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-10 w-full rounded-md border border-gray-700 bg-gray-900/50 pl-10 pr-4 text-sm text-white placeholder-gray-400 backdrop-blur-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative rounded-full p-1 text-gray-400 hover:bg-gray-800 hover:text-white">
              <Bell size={20} />
              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                3
              </span>
            </button>

            <div className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-teal-500">
              <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="h-full w-full object-cover" />
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto bg-[#0f172a] p-4 lg:ml-64 lg:p-6">{children}</main>
      </div>
    </div>
  )
}

