import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value;

  const isAuthPage = request.nextUrl.pathname.startsWith('/login');

  // Jika sudah login dan mencoba ke /login → redirect ke dashboard
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Jika belum login dan menuju halaman yang butuh proteksi → redirect ke login
  const protectedRoutes = ['/dashboard', '/catat-pemasukan', '/catat-pengeluaran'];

  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (!token && isProtected) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/catat-pemasukan/:path*',
    '/catat-pengeluaran/:path*',
    '/login',
  ],
};
