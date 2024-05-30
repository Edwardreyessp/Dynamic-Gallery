import { ScrollArea } from '@/components/ui/scroll-area';
import { getPhotos } from '@/app/api/photos/route';
import { SearchOption } from './SearchOption';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

type Props = {
	search: string;
};

export const SearchOptionsDrawer = async ({ search }: Props) => {
	const options = await getPhotos(search);

	return (
		<div className='relative h-0 w-full max-w-md'>
			<ScrollArea className='absolute max-h-[200px] h-fit w-full max-w-md rounded-md bg-gray-50 dark:bg-gray-700'>
				{options.map(option => (
					<SearchOption key={option.id} value={option.slug}>
						<MagnifyingGlassIcon className='h-5 w-5 text-gray-400 dark:text-gray-300' />
						<span>{option.title}</span>
					</SearchOption>
				))}
			</ScrollArea>
		</div>
	);
};
