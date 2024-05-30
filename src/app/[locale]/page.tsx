import { SearchBar } from '@/features/search';
import { useTranslations } from 'next-intl';

export default function Home() {
	const t = useTranslations('Home');

	return (
		<main className='flex flex-1 flex-col gap-8 items-center justify-center'>
			<h1 className='text-4xl font-bold text-center'>{t('title')}</h1>
			<p className='text-lg text-center'>{t('subtitle')}</p>
			<SearchBar />
		</main>
	);
}
