import { useTranslations } from 'next-intl';
import { SearchInput, SearchOptions } from './';
import { Suspense } from 'react';

export const SearchBar = () => {
	const t = useTranslations('SearchBar');

	return (
		<div className='w-full flex flex-col gap-4 items-center'>
			<SearchInput placeholder={t('placeholder')} textButton={t('button')} />
			<Suspense fallback={<div>Loading...</div>}>
				<SearchOptions />
			</Suspense>
		</div>
	);
};
