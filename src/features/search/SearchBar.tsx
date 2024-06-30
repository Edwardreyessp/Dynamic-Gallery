import { useTranslations } from 'next-intl';
import { SearchInput } from './';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	search: string;
}

export const SearchBar = (props: Props) => {
	const t = useTranslations('Home');

	return (
		<div className='w-full flex flex-col gap-4 items-center' {...props}>
			<SearchInput />
			<p className='text-sm text-center text-gray-500 dark:text-gray-400'>
				{t('search')}
			</p>
			{/* <SearchOptions search={search} /> */}
		</div>
	);
};
