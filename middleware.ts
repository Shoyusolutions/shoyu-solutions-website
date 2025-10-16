import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from './lib/auth';

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Define protected routes
  const protectedPaths = ['/admin', '/dashboard', '/protected', '/proposal'];
  const isProtectedPath = protectedPaths.some(path => pathname.startsWith(path));

  if (isProtectedPath) {
    const token = request.cookies.get('auth-token');

    if (!token) {
      // Redirect to login if no token
      const url = new URL('/login', request.url);
      url.searchParams.set('from', pathname);
      return NextResponse.redirect(url);
    }

    // Verify the token
    const payload = await verifyToken(token.value);

    if (!payload) {
      // Invalid token, redirect to login
      const url = new URL('/login', request.url);
      url.searchParams.set('from', pathname);
      const response = NextResponse.redirect(url);
      response.cookies.delete('auth-token');
      return response;
    }

    // Token is valid, allow access
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-user-authenticated', 'true');

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  // Allow access to non-protected routes
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};