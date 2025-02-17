import { FormEventHandler } from 'react'
interface NewGameFormProps {
  handleSubmit: FormEventHandler<HTMLFormElement>
}

export default function NewGameForm({ handleSubmit }: NewGameFormProps) {
  return (
    <form
      className="flex flex-col items-center justify-center"
      onSubmit={handleSubmit}
    >
      <h1 className="text-4xl font-bold mb-4">Welcome to WordleX</h1>
      <h3 className="text-xl text-center mb-6">
        WordleX is a word game that is essentially Worlde but you can play
        multiple boards at once. Select the number of boards below and then
        click the Start Game button below to get started. Your max number of
        guesses will be the number of boards selected plus 5. Good luck!
      </h3>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="boards">
          Number of Boards
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          id="boards"
          name="boards"
          type="number"
          min={1}
          max={10}
          placeholder="Number of Boards"
        />
      </div>
      <div>
        <input
          type="submit"
          value="Start Game"
          className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
        />
      </div>
    </form>
  )
}
