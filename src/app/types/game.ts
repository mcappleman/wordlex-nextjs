interface iGame {
  id: number
  user_id: number
  max_guesses: number
  status: string
  boards: iBoard[]
  guesses: iGuess[]
}

interface iBoard {
  id: number
  status: string
  codes: iBoardRow[]
}

interface iGuess {
  id: number
  word: string
}

interface iBoardRow {
  id: number
  codes: iCharCode[]
}

interface iCharCode {
  id: number
  char: string
  color: string
}

export type { iGame, iBoard, iBoardRow, iGuess, iCharCode }
