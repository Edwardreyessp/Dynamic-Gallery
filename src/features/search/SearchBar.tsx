import { useTranslations } from 'next-intl';
import { SearchComponents } from './';

export const SearchBar = () => {
	const t = useTranslations('SearchBar');

	return (
		<div className='w-full flex flex-col gap-4 items-center'>
			<SearchComponents
				placeholder={t('placeholder')}
				textButton={t('button')}
			/>
		</div>
	);
};
