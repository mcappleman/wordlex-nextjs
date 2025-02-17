'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    const data = new FormData(event.currentTarget)
    const email = data.get('email')
    const first_name = data.get('first_name')
    const last_name = data.get('last_name')
    const password = data.get('password')
    const password_confirmation = data.get('password_confirmation')
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({
          email,
          first_name,
          last_name,
          password,
          password_confirmation,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      setLoading(false)
      const json = await response.json()
      console.log('response', json)
      router.push('/home')
    } catch (error) {
      setLoading(false)
      console.error('error', error)
      return
      // show an error message
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Register</h1>
      <p className="mb-8">Register for WordleX</p>
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="first_name">
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="first_name"
            name="first_name"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="last_name">
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="last_name"
            name="last_name"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-sm font-bold mb-2"
            htmlFor="password_confirmation"
          >
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password_confirmation"
            name="password_confirmation"
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <div className="flex items-center justify-between">
          {loading && <p>Registering...</p>}
          {!loading && (
            <input
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              value="Register"
            />
          )}
        </div>
      </form>
    </div>
  )
}
