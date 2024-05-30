import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'es'] as const;

export const pathnames = {
	'/': '/',
	'/about': {
		en: '/about',
		es: '/nosotros',
	},
	'/gallery': {
		en: '/gallery',
		es: '/galeria',
	},
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = 'never' as const;

export type AppPathnames = keyof typeof pathnames;
