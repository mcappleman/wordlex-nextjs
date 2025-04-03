import { NextResponse } from 'next/server'
import axios from 'axios'
import { cookies } from 'next/headers'

export async function GET() {
  try {
    const token = (await cookies()).get('token')?.value
    const axiosParams = {
      headers: {
        Authorization: token,
      },
    }
    const response = await axios.get(
      `${process.env.WORDLEX_API_BASE_URL}/me`,
      axiosParams
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

export async function PUT(req: Request) {
  try {
    const token = (await cookies()).get('token')?.value
    const axiosParams = {
      headers: {
        Authorization: token,
      },
    }
    const {
      first_name,
      last_name,
      email,
      current_password,
      new_password,
      password_confirmation,
    } = await req.json()

    const body: {
      first_name: string
      last_name: string
      email: string
      current_password?: string
      new_password?: string
      password_confirmation?: string
    } = {
      first_name,
      last_name,
      email,
    }
    if (current_password && new_password && password_confirmation) {
      body.current_password = current_password
      body.new_password = new_password
      body.password_confirmation = password_confirmation
    }
    const response = await axios.put(
      `${process.env.WORDLEX_API_BASE_URL}/me`,
      body,
      axiosParams
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

export async function DELETE() {
  try {
    const token = (await cookies()).get('token')?.value
    const axiosParams = {
      headers: {
        Authorization: token,
      },
    }
    const response = await axios.delete(
      `${process.env.WORDLEX_API_BASE_URL}/me`,
      axiosParams
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
