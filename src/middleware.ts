import createMiddleware from 'next-intl/middleware';
import { pathnames, locales, localePrefix } from './config';

export default createMiddleware({
	defaultLocale: 'es',
	locales,
	pathnames,
	localePrefix,
});

export const config = {
	matcher: [
		// Enable a redirect to a matching locale at the root
		'/',

		// Set a cookie to remember the previous locale for
		// all requests that have a locale prefix
		'/(es|en)/:path*',

		// Enable redirects that add missing locales
		// (e.g. `/pathnames` -> `/en/pathnames`)
		'/((?!_next|_vercel|.*\\..*).*)',

		// Skip all paths that should not be internationalized
		// (e.g. `/api`, `/_next`, `/_vercel`, `.*.ext`)
		'/((?!api|_next|.*\\..*).*)',
	],
};
