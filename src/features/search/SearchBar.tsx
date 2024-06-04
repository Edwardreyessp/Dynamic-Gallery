import { useTranslations } from 'next-intl';
import { SearchComponents } from './';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export const SearchBar = (props: Props) => {
	const t = useTranslations('SearchBar');

	return (
		<div className='w-full flex flex-col gap-4 items-center' {...props}>
			<SearchComponents
				placeholder={t('placeholder')}
				textButton={t('button')}
			/>
		</div>
	);
};
