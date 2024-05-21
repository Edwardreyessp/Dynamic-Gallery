import LocaleSwitcher from '@/components/LocaleSwitcher';
import { ThemeSwitch } from '@/components/ThemeSwitch';
import { useTranslations } from 'next-intl';

export default function Home() {
	const t = useTranslations('Home');

	return (
		<main className='flex min-h-screen flex-col items-center gap-4 justify-center'>
			<h1 className='text-4xl font-bold text-center mt-8'>{t('title')}</h1>
			<p className='text-lg text-center mt-4'>{t('subtitle')}</p>
			<LocaleSwitcher />
			<ThemeSwitch />
		</main>
	);
}
