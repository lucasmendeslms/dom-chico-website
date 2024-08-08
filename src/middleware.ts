import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { AuthService } from './app/modules/services/auth/auth.service';
import { IAuth } from './app/modules/models/entities/auth.entity';
import { SessionContext, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';


export async function middleware(req: NextRequest, res: NextResponse) {

  try {

    const url = req.nextUrl.clone();
    const getAuth: IAuth = await AuthService.authenticateUser();

    if (url.pathname === '/signout') {
      await signOut({ redirect: false });
    }

    if(!getAuth.hasSession) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();

  } catch (e) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|login|register|error).*)'],
};