import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  const cookieStore = cookies();
    const jwt = (await cookieStore).get("strapi_jwt")?.value;

  const publicRoutes = ["/QuickPing", "/auth/signin", "/register"];

  const isPublicRoute = publicRoutes.includes(request.nextUrl.pathname);

  if (!jwt && !isPublicRoute) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  return NextResponse.next();
}