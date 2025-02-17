import { iBoard, iBoardRow, iCharCode } from '../types'

interface BoardProps {
  board: iBoard
}

export default function Board({ board }: BoardProps) {
  return (
    <div key={board.id} className="flex flex-col items-center p-4 rounded-md">
      <h3 className="text-xl font-bold">{board.status}</h3>
      {board.codes.map((row: iBoardRow) => (
        <div key={row.id} className="flex items-center justify-center">
          {row.map((charColor: iCharCode) => (
            <div key={'hello'} className="flex items-center justify-center">
              <div
                className="p-3 m-2 text-left border border-gray-300 text-lg font-bold"
                style={{
                  backgroundColor:
                    charColor.color === 'yellow'
                      ? 'goldenrod'
                      : charColor.color,
                }}
              >
                <div className="w-6 h-6 text-center mb-1">
                  {charColor.char.toUpperCase()}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
