"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Eye, EyeOff, Check, X } from "lucide-react"
import Layout from "@/components/layout"

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  // Password validation
  const hasMinLength = password.length >= 8
  const hasUpperCase = /[A-Z]/.test(password)
  const hasNumber = /[0-9]/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
  const isPasswordValid = hasMinLength && hasUpperCase && hasNumber && hasSpecialChar

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!isPasswordValid) return

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
        <div className="hidden w-1/2 bg-gradient-to-br from-teal-500 to-emerald-700 lg:block">
          <div className="flex h-full flex-col items-center justify-center p-12 text-white">
            <div className="max-w-md">
              <h2 className="text-4xl font-bold">Join thousands of businesses using AdminHub</h2>
              <p className="mt-6 text-lg text-teal-100">
                Get access to our powerful dashboard to track sales, manage inventory, and grow your online store.
              </p>

              <div className="mt-12 space-y-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-teal-600">
                    <Check size={14} />
                  </div>
                  <div>
                    <h3 className="font-medium">Real-time analytics</h3>
                    <p className="mt-1 text-sm text-teal-100">
                      Track your business performance with our advanced analytics dashboard
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-teal-600">
                    <Check size={14} />
                  </div>
                  <div>
                    <h3 className="font-medium">Inventory management</h3>
                    <p className="mt-1 text-sm text-teal-100">
                      Keep track of your products and never run out of stock again
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-teal-600">
                    <Check size={14} />
                  </div>
                  <div>
                    <h3 className="font-medium">Customer insights</h3>
                    <p className="mt-1 text-sm text-teal-100">
                      Understand your customers better with detailed insights and reports
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col justify-center p-6 lg:w-1/2 lg:p-12">
          <div className="mx-auto w-full max-w-md">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Create your account</h2>
              <p className="mt-3 text-gray-400">Fill in the form below to get started</p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-400">
                    First Name
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="John"
                    className="mt-2 block w-full rounded-md border border-gray-700 bg-gray-800/50 px-4 py-3 text-white placeholder-gray-500 backdrop-blur-sm transition-colors focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-400">
                    Last Name
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Doe"
                    className="mt-2 block w-full rounded-md border border-gray-700 bg-gray-800/50 px-4 py-3 text-white placeholder-gray-500 backdrop-blur-sm transition-colors focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="mt-2 block w-full rounded-md border border-gray-700 bg-gray-800/50 px-4 py-3 text-white placeholder-gray-500 backdrop-blur-sm transition-colors focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-400">
                  Password
                </label>
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

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <div
                      className={`flex h-5 w-5 items-center justify-center rounded-full ${hasMinLength ? "bg-green-500" : "bg-gray-700"}`}
                    >
                      {hasMinLength ? <Check size={12} /> : <X size={12} />}
                    </div>
                    <span className={`text-sm ${hasMinLength ? "text-green-500" : "text-gray-400"}`}>
                      At least 8 characters
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className={`flex h-5 w-5 items-center justify-center rounded-full ${hasUpperCase ? "bg-green-500" : "bg-gray-700"}`}
                    >
                      {hasUpperCase ? <Check size={12} /> : <X size={12} />}
                    </div>
                    <span className={`text-sm ${hasUpperCase ? "text-green-500" : "text-gray-400"}`}>
                      At least 1 uppercase letter
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className={`flex h-5 w-5 items-center justify-center rounded-full ${hasNumber ? "bg-green-500" : "bg-gray-700"}`}
                    >
                      {hasNumber ? <Check size={12} /> : <X size={12} />}
                    </div>
                    <span className={`text-sm ${hasNumber ? "text-green-500" : "text-gray-400"}`}>
                      At least 1 number
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className={`flex h-5 w-5 items-center justify-center rounded-full ${hasSpecialChar ? "bg-green-500" : "bg-gray-700"}`}
                    >
                      {hasSpecialChar ? <Check size={12} /> : <X size={12} />}
                    </div>
                    <span className={`text-sm ${hasSpecialChar ? "text-green-500" : "text-gray-400"}`}>
                      At least 1 special character
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <input
                  id="terms"
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="mt-1 h-5 w-5 rounded border-gray-700 bg-gray-800 text-teal-500 focus:ring-teal-500"
                  required
                />
                <label htmlFor="terms" className="ml-3 block text-sm text-gray-400">
                  I agree to the{" "}
                  <Link href="/terms" className="text-teal-500 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-teal-500 hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading || !isPasswordValid || !agreeTerms}
                className="flex w-full items-center justify-center rounded-md bg-gradient-to-r from-teal-500 to-emerald-500 px-4 py-3 font-medium text-white shadow-lg transition-all hover:from-teal-600 hover:to-emerald-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:cursor-not-allowed disabled:opacity-70"
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
                    Creating Account...
                  </>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-[#0f172a] px-4 text-gray-400">Or sign up with</span>
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
                Already have an account?{" "}
                <Link href="/" className="font-medium text-teal-500 hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

