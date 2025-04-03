"use client"

import { type ReactNode, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart2,
  Box,
  HelpCircle,
  Home,
  LogOut,
  Settings,
  ShoppingCart,
  User,
  Users,
  Bell,
  FileText,
  Menu,
  X,
} from "lucide-react"

interface NavItemProps {
  href: string
  icon: ReactNode
  children: ReactNode
  badge?: number
  onClick?: () => void
}

function NavItem({ href, icon, children, badge, onClick }: NavItemProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
        isActive
          ? "bg-gradient-to-r from-teal-600/50 to-emerald-600/50 text-white"
          : "text-gray-400 hover:bg-gray-800 hover:text-white"
      }`}
    >
      <span className={`${isActive ? "text-teal-400" : "text-gray-400 group-hover:text-teal-400"}`}>{icon}</span>
      <span>{children}</span>
      {badge !== undefined && (
        <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-teal-600/30 px-1 text-xs font-medium text-teal-300">
          {badge}
        </span>
      )}
    </Link>
  )
}

interface SidebarProps {
  user: {
    name: string
    email: string
    avatar: string
  }
}

export default function Sidebar({ user }: SidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-md bg-gray-800 text-white shadow-lg lg:hidden"
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile sidebar overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden" onClick={closeMobileMenu} />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 flex h-full w-64 flex-col border-r border-gray-800 bg-[#0f172a] transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center gap-3 border-b border-gray-800 p-4">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-teal-500">
            <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-white">{user.name}</span>
            <span className="text-xs text-gray-400">{user.email}</span>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-3">
          <div className="mb-2">
            <h3 className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500">MAIN</h3>
            <nav className="mt-1 space-y-1">
              <NavItem href="/dashboard" icon={<Home size={18} />} onClick={closeMobileMenu}>
                Dashboard
              </NavItem>
              <NavItem href="/dashboard/analytics" icon={<BarChart2 size={18} />} onClick={closeMobileMenu}>
                Analytics
              </NavItem>
            </nav>
          </div>

          <div className="mb-2 mt-4">
            <h3 className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500">INVENTORY</h3>
            <nav className="mt-1 space-y-1">
              <NavItem href="/dashboard/orders" icon={<ShoppingCart size={18} />} badge={12} onClick={closeMobileMenu}>
                Orders
              </NavItem>
              <NavItem href="/dashboard/products" icon={<Box size={18} />} onClick={closeMobileMenu}>
                Products
              </NavItem>
            </nav>
          </div>

          <div className="mb-2 mt-4">
            <h3 className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500">MANAGEMENT</h3>
            <nav className="mt-1 space-y-1">
              <NavItem href="/dashboard/employees" icon={<Users size={18} />} onClick={closeMobileMenu}>
                Employees
              </NavItem>
              <NavItem href="/dashboard/transactions" icon={<FileText size={18} />} onClick={closeMobileMenu}>
                Transactions
              </NavItem>
            </nav>
          </div>

          <div className="mb-2 mt-4">
            <h3 className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500">ACCOUNT</h3>
            <nav className="mt-1 space-y-1">
              <NavItem href="/dashboard/profile" icon={<User size={18} />} onClick={closeMobileMenu}>
                Profile
              </NavItem>
              <NavItem href="/dashboard/notifications" icon={<Bell size={18} />} badge={3} onClick={closeMobileMenu}>
                Notifications
              </NavItem>
              <NavItem href="/dashboard/settings" icon={<Settings size={18} />} onClick={closeMobileMenu}>
                Settings
              </NavItem>
              <NavItem href="/dashboard/help" icon={<HelpCircle size={18} />} onClick={closeMobileMenu}>
                Help & Support
              </NavItem>
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-800 p-3">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </>
  )
}

