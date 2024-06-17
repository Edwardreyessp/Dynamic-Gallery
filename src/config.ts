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
	'/gallery/[id]': {
		en: '/gallery/[id]',
		es: '/galeria/[id]',
	},
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = 'always' as const;

export type AppPathnames = keyof typeof pathnames;
