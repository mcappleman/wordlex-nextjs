import { NextResponse, NextRequest } from 'next/server'
import { cookies } from 'next/headers'

const publicRoutes = ['/', '/register']
const privateRoutes = ['/home']

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isPrivate = privateRoutes.includes(path)
  const isPublic = publicRoutes.includes(path)

  const cookie = (await cookies()).get('token')?.value
  console.log(JSON.stringify(cookie))

  console.log('middleware', req.url)
  if (isPrivate && !cookie) {
    return NextResponse.redirect(new URL('/', req.nextUrl))
  }

  if (isPublic && cookie && !path.startsWith('/home')) {
    return NextResponse.redirect(new URL('/home', req.nextUrl))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/home/:path*'],
}
