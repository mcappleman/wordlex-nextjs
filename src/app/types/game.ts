interface iGame {
  id: number
  user_id: number
  max_guesses: number
  status: string
  boards: iBoard[]
  guesses: iGuess[]
}

interface iGuess {
  id: number
  word: string
  game_id: number
  created_at: string
  updated_at: string
}

interface iBoard {
  id: number
  status: string
  board_rows: iBoardRow[]
}

interface iBoardRow {
  id: number
  board_cells: iBoardCell[]
}

interface iBoardCell {
  id: number
  char: string
  color: string
}

export type { iGame, iBoard, iBoardRow, iBoardCell }
