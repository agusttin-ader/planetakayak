import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const DEMO_HOME_ONLY = process.env.DEMO_HOME_ONLY !== "false";

function isPublicAsset(pathname: string): boolean {
  if (pathname.startsWith("/_next")) return true;
  if (pathname === "/favicon.ico" || pathname === "/robots.txt" || pathname === "/sitemap.xml") {
    return true;
  }
  return /\.(ico|png|jpg|jpeg|gif|webp|svg|woff2?|txt|xml|json|webmanifest)$/i.test(
    pathname,
  );
}

export function proxy(request: NextRequest) {
  if (!DEMO_HOME_ONLY) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  if (pathname === "/" || pathname === "/__demo_lock") {
    return NextResponse.next();
  }

  if (isPublicAsset(pathname)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/__demo_lock";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
