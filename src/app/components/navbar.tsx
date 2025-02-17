import Link from 'next/link'

export default function NavBar() {
  return (
    <header className="sticky top-0 z-10 bg-gray-700 shadow-md">
      <div className="flex items-center justify-between px-4 py-2 sm:px-6">
        <h1 className="text-2xl font-bold">WordleX</h1>
        <nav className="flex items-center space-x-4">
          <Link href="/home" className="text-white">
            Home
          </Link>
          <Link href="/home/history" className="text-white">
            History
          </Link>
          <Link href="/profile" className="text-white">
            Profile
          </Link>
          <Link href="/logout" className="text-white">
            Logout
          </Link>
        </nav>
      </div>
    </header>
  )
}
