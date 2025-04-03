import NavBar from '../components/navbar'

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <div className="flex flex-col">
        <NavBar />
        <main className="grid flex-1 items-start gap-2 p-4 sm:px-6">
          {children}
        </main>
      </div>
    </main>
  )
}
