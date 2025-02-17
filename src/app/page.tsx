import Login from './components/login'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to WordleX</h1>
      <h3 className="text-xl text-center mb-6">
        WordleX is a word game that is essentially Worlde but you can play
        multiple boards at once. Please login or create a user below in order to
        get started.
      </h3>
      <Login />
    </div>
  )
}
