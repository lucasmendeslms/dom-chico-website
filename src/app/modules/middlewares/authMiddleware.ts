import { Session } from 'next-auth';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from '../services/auth/authGoogle.service';

export async function middleware(req: NextRequest) {
  const session: Session | null = await auth();

  if (!session) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/:path*'], // Protege todas as rotas que começam com /user
};
