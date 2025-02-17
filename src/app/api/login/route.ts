import { NextResponse } from 'next/server'
import axios from 'axios'
import { serialize } from 'cookie'

export async function POST(req: Request) {
  const { email, password } = await req.json()
  const response = await axios.post(
    `${process.env.WORDLEX_API_BASE_URL}/login`,
    {
      email,
      password,
    }
  )
  if (response.status === 200) {
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
    return NextResponse.error()
  }
}
