import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { pathnames, locales, localePrefix } from './config';

const intlMiddleware = createMiddleware({
	defaultLocale: 'es',
	locales,
	pathnames,
	localePrefix,
});

export default function middleware(req: NextRequest) {
	return intlMiddleware(req);
}

export const config = {
	// Skip all paths that should not be internationalized
	matcher: ['/((?!api|_next|.*\\..*).*)'],
};
