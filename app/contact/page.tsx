"use client"

import type React from "react"

import { useState } from "react"
import Layout from "@/components/layout"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send the form data to your backend
    setSubmitted(true)
  }

  return (
    <Layout>
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-2 text-gray-400">Have questions about AdminHub? We&apos;re here to help.</p>

        {submitted ? (
          <div className="mt-8 rounded-lg border border-teal-500 bg-teal-500/10 p-6 text-center">
            <h2 className="text-xl font-bold text-teal-500">Thank you for your message!</h2>
            <p className="mt-2 text-gray-300">
              We&apos;ve received your inquiry and will get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="rounded-md bg-teal-500 px-6 py-3 text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </Layout>
  )
}

