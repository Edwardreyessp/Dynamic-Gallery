import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../globals.css';
import { ThemeProvider } from 'next-themes';
import { Navbar } from '@/shared/components/layout/Navbar';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
	title: 'Gallery App',
	description: 'All your favorite photos in one place.',
};

export default function LocaleLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={poppins.className + ' bg-bkg text-content'}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
