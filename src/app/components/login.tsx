'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'

export default function Login() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    const data = new FormData(event.currentTarget)
    const email = data.get('email')
    const password = data.get('password')
    console.log(email, password)
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const json = await response.json()
      console.log('response', json)
      router.push('/home')
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error('error', error)
      // show an error message
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email:</label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password:</label>
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <div>
            {loading && <p>Logging In...</p>}
            {!loading && (
              <input
                type="submit"
                value="Submit"
                className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
              />
            )}
          </div>
        </form>
        <hr />
        <div className="text-center">
          <Link href="/register">
            Don&apos;t have an account? Register here.
          </Link>
        </div>
      </div>
    </div>
  )
}
