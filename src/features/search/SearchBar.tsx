import { useTranslations } from 'next-intl';
import { SearchInput, SearchOptions } from './';

export const SearchBar = () => {
	const t = useTranslations('SearchBar');

	return (
		<div className='w-full flex flex-col gap-4 items-center'>
			<SearchInput placeholder={t('placeholder')} textButton={t('button')} />
			<SearchOptions />
		</div>
	);
};
