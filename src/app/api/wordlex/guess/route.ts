import { NextResponse } from 'next/server'
import axios from 'axios'
import { cookies } from 'next/headers'

export async function POST(req: Request) {
  const { guess, game_id } = await req.json()
  const token = (await cookies()).get('token')?.value

  try {
    const response = await axios.post(
      `${process.env.WORDLEX_API_BASE_URL}/guesses`,
      {
        word: guess,
        wordle_id: game_id,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    )

    if (response.status === 201) {
      return NextResponse.json(
        { success: true, data: response.data },
        { status: 201 }
      )
    } else {
      return NextResponse.error()
    }
  } catch (error) {
    console.log(error)
    return NextResponse.error()
  }
}
