import { useTranslations } from 'next-intl';
import { SearchInput, SearchOptionsDrawer } from './';
import { Suspense } from 'react';

type Props = {
	search: string;
};

export const SearchBar = ({ search }: Props) => {
	const t = useTranslations('SearchBar');

	return (
		<div className='w-full flex flex-col gap-4 items-center'>
			<SearchInput placeholder={t('placeholder')} textButton={t('button')} />
			<Suspense fallback={<div>Loading...</div>}>
				<SearchOptionsDrawer search={search} />
			</Suspense>
		</div>
	);
};
