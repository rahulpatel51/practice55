"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"
import Layout from "@/components/layout"

export default function Home() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1000)
  }

  return (
    <Layout>
      <div className="flex min-h-[calc(100vh-72px)]">
        <div className="flex-1 p-8 lg:p-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Manage Your E-commerce{" "}
              <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Business Efficiently
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              Powerful dashboard to track sales, manage inventory, and grow your online store with advanced analytics.
            </p>

            <div className="mt-10 overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 shadow-xl">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=700"
                  alt="Dashboard Preview"
                  width={700}
                  height={500}
                  className="w-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f172a] to-transparent p-8">
                  <h3 className="text-xl font-bold text-white">Comprehensive analytics dashboard</h3>
                  <p className="mt-2 text-gray-300">Track your business performance in real-time</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500/20 text-teal-500">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 4L12 14.01L9 11.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-gray-300">Real-time analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500/20 text-teal-500">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 6V12L16 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-gray-300">24/7 support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500/20 text-teal-500">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.59 13.51L15.42 17.49"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.41 6.51L8.59 10.49"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-gray-300">Easy integration</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden w-[500px] flex-col justify-center bg-gray-900/50 p-12 backdrop-blur-sm md:flex">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold">Sign In</h2>
            <p className="mt-3 text-gray-400">Enter your credentials to access your account</p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  className="mt-2 block w-full rounded-md border border-gray-700 bg-gray-800/50 px-4 py-3 text-white placeholder-gray-500 backdrop-blur-sm transition-colors focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  required
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-400">
                    Password
                  </label>
                  <Link href="/forgot-password" className="text-sm text-teal-500 hover:underline">
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative mt-2">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="block w-full rounded-md border border-gray-700 bg-gray-800/50 px-4 py-3 text-white placeholder-gray-500 backdrop-blur-sm transition-colors focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-5 w-5 rounded border-gray-700 bg-gray-800 text-teal-500 focus:ring-teal-500"
                />
                <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-400">
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full items-center justify-center rounded-md bg-gradient-to-r from-teal-500 to-emerald-500 px-4 py-3 font-medium text-white shadow-lg transition-all hover:from-teal-600 hover:to-emerald-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="mr-2 h-5 w-5 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Signing In...
                  </>
                ) : (
                  <>
                    Sign In <span className="ml-2">→</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-gray-900/50 px-4 text-gray-400">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center rounded-md border border-gray-700 bg-gray-800/50 px-4 py-3 text-white backdrop-blur-sm transition-colors hover:bg-gray-700">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                    <path fill="none" d="M1 1h22v22H1z" />
                  </svg>
                  Google
                </button>
                <button className="flex items-center justify-center rounded-md border border-gray-700 bg-gray-800/50 px-4 py-3 text-white backdrop-blur-sm transition-colors hover:bg-gray-700">
                  <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 008.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                  </svg>
                  Facebook
                </button>
              </div>
            </div>

            <div className="mt-8 text-center text-sm">
              <p className="text-gray-400">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="font-medium text-teal-500 hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Mobile login form */}
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm md:hidden">
          <div className="w-full max-w-md rounded-xl bg-gray-900 p-6 shadow-xl">
            <h2 className="text-2xl font-bold">Sign In</h2>
            <p className="mt-2 text-gray-400">Enter your credentials to access your account</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="email-mobile" className="block text-sm font-medium text-gray-400">
                  Email
                </label>
                <input
                  id="email-mobile"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  required
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password-mobile" className="block text-sm font-medium text-gray-400">
                    Password
                  </label>
                  <Link href="/forgot-password" className="text-sm text-teal-500 hover:underline">
                    Forgot?
                  </Link>
                </div>
                <div className="relative mt-1">
                  <input
                    id="password-mobile"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="block w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="remember-me-mobile"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-teal-500 focus:ring-teal-500"
                />
                <label htmlFor="remember-me-mobile" className="ml-2 block text-sm text-gray-400">
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full items-center justify-center rounded-md bg-gradient-to-r from-teal-500 to-emerald-500 px-4 py-2 font-medium text-white shadow-lg transition-all hover:from-teal-600 hover:to-emerald-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="mr-2 h-4 w-4 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Signing In...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            <div className="mt-6 text-center text-sm">
              <p className="text-gray-400">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="font-medium text-teal-500 hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

