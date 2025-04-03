import type { ReactNode } from "react"
import Link from "next/link"
import { Package } from "lucide-react"

interface LayoutProps {
  children: ReactNode
  showNav?: boolean
  className?: string
}

export default function Layout({ children, showNav = false, className = "" }: LayoutProps) {
  return (
    <div className={`min-h-screen bg-[#0f172a] text-white ${className}`}>
      <header className="border-b border-gray-800 px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <Package className="h-8 w-8 text-yellow-400" />
            <span>AdminHub</span>
          </Link>
          {!showNav && (
            <div className="flex items-center gap-4">
              <Link href="https://github.com" target="_blank" className="text-gray-400 hover:text-white">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </Link>
              <Link href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-white">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </Link>
              <Link
                href="/contact"
                className="rounded-md border border-teal-500 px-4 py-2 text-teal-500 transition-all hover:bg-teal-500 hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}

