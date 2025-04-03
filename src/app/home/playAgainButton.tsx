export default function PlayAgainButton({
  resetGame,
}: {
  resetGame: () => void
}) {
  return (
    <button
      onClick={resetGame}
      className="w-sm px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
    >
      Play Again
    </button>
  )
}
