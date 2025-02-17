import { iBoard, iBoardRow, iBoardCell } from '../types'

interface BoardProps {
  board: iBoard
}

export default function Board({ board }: BoardProps) {
  if (board.board_rows.length === 0) {
    return
  }
  return (
    <div
      key={board.id}
      className="flex flex-col items-center p-4 rounded-md m-2 border border-gray-300"
    >
      {board.board_rows.map((row: iBoardRow) => (
        <div key={row.id} className="flex items-center justify-center">
          {row.board_cells.map((cell: iBoardCell) => (
            <div key={cell.id} className="flex items-center justify-center">
              <div
                className="p-3 m-2 text-left border border-gray-300 text-lg font-bold"
                style={{
                  backgroundColor:
                    cell.color === 'yellow' ? 'goldenrod' : cell.color,
                }}
              >
                <div className="w-6 h-6 text-center mb-1">
                  {cell.char.toUpperCase()}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
