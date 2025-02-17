import { NextResponse } from 'next/server'
import axios from 'axios'
import { cookies } from 'next/headers'

export async function POST(req: Request) {
  const { num_of_boards } = await req.json()
  const token = (await cookies()).get('token')?.value
  try {
    const response = await axios.post(
      `${process.env.WORDLEX_API_BASE_URL}/wordles`,
      {
        num_of_boards,
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

export async function GET(req: Request) {
  const token = (await cookies()).get('token')?.value
  const params = new URL(req.url).searchParams
  try {
    const response = await axios.get(
      `${process.env.WORDLEX_API_BASE_URL}/wordles`,
      {
        headers: {
          Authorization: token,
        },
        params,
      }
    )

    if (response.status === 200) {
      return NextResponse.json(
        { success: true, data: response.data },
        { status: 200 }
      )
    } else {
      return NextResponse.error()
    }
  } catch (error) {
    console.log(error)
    return NextResponse.error()
  }
}
