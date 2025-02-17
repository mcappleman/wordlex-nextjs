import { iGame, iBoard } from '../types/game'
import React, { useState } from 'react'
import Board from './board'

interface WordleXProps {
  game: iGame
  setGame: React.Dispatch<React.SetStateAction<iGame | null>>
}

export default function WordleX({ game, setGame }: WordleXProps) {
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    const data = new FormData(event.currentTarget)
    const guess = data.get('guess')
    const game_id = game?.id

    try {
      const response = await fetch('/api/wordlex/guess', {
        method: 'POST',
        body: JSON.stringify({ guess, game_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      setLoading(false)
      if (data.success) {
        setGame(data.data)
      }
    } catch (error) {
      setLoading(false)
      console.error('error', error)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">WordleX</h1>
      <h3 className="text-xl text-center mb-6">
        Welcome to WordleX! You are currently playing {game.boards.length}{' '}
        boards.
      </h3>
      <div className="mb-4">
        {loading && <p>Guessing...</p>}
        {!loading && game.status === 'active' && (
          <form
            className="flex flex-col items-center justify-center"
            onSubmit={handleSubmit}
          >
            <div className="flex rounded-lg shadow-sm">
              <input
                type="text"
                id="guess"
                name="guess"
                className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Guess"
              />
              <button
                type="submit"
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Guess
              </button>
            </div>
          </form>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4">
        {game.boards.map((board: iBoard) => (
          <Board key={board.id} board={board} />
        ))}
      </div>
    </div>
  )
}
