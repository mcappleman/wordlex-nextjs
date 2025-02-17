'use client'

import { FormEventHandler, useEffect, useState } from 'react'
import { iGame } from '../types/game'
import NewGameForm from './newGameForm'
import WordleX from './wordlex'

const HomePage: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [game, setGame] = useState<iGame | null>(null)

  useEffect(() => {
    fetch('/api/wordlex?active=true')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.data[0] !== undefined) {
          setGame(data.data[0])
        }
        setLoading(false)
      })
  }, [])

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const num_of_boards = data.get('boards')

    try {
      const response = await fetch('/api/wordlex', {
        method: 'POST',
        body: JSON.stringify({ num_of_boards }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      if (data.success) {
        setGame(data.data)
      }
    } catch (error) {
      console.error('error', error)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full mt-20">
      {!game && loading && <p>Loading...</p>}
      {!loading && !game && <NewGameForm handleSubmit={handleSubmit} />}
      {game && <WordleX game={game} setGame={setGame} />}
    </div>
  )
}

export default HomePage
