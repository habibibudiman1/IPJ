import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n/request";
import { NextRequest } from "next/server";

const intlMiddleware = createMiddleware({
  locales: locales,
  defaultLocale: "id",
  localePrefix: "as-needed",
});

export default function middleware(request: NextRequest) {
  // Skip internationalization for admin routes
  if (request.nextUrl.pathname.startsWith("/admin")) {
    return;
  }
  return intlMiddleware(request);
}

export const config = {
  matcher: ["/", "/(id|en)/:path*", "/((?!api|_next|_vercel|admin|.*\\..*).*)" ],
};
