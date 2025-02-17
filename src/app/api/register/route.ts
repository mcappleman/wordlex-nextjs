import { NextResponse } from 'next/server'
import axios from 'axios'
import { serialize } from 'cookie'

export async function POST(req: Request) {
  const { email, first_name, last_name, password, password_confirmation } =
    await req.json()
  console.log(email, first_name, last_name, password, password_confirmation)
  const response = await axios.post(
    `${process.env.WORDLEX_API_BASE_URL}/users`,
    {
      email,
      first_name,
      last_name,
      password,
      password_confirmation,
    }
  )
  if (response.status === 201) {
    const token = response.data.auth_token
    const cookie = serialize('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 1 week
    })
    const res = NextResponse.json({ success: true }, { status: 200 })
    res.headers.append('Set-Cookie', cookie)
    return res
  } else {
    console.log(response)
    return NextResponse.error()
  }
}
