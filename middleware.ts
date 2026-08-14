import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Page routes (e.g. /destination/[slug], /india/[state]) are looked up with
// exact-match, lowercase slugs, so a differently-cased URL 404s. Redirect
// those to the lowercase canonical path instead of 404ing. Files (anything
// with an extension — images, sitemap.xml, ...) are left untouched since
// some public/ assets are genuinely mixed-case.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const lower = pathname.toLowerCase();
  if (pathname !== lower) {
    const url = request.nextUrl.clone();
    url.pathname = lower;
    return NextResponse.redirect(url, 308);
  }
}

export const config = {
  matcher: ["/((?!_next/|api/|.*\\..*).*)"],
};
