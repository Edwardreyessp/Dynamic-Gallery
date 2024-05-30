import { ScrollArea } from '@/components/ui/scroll-area';
import { SearchOption } from './SearchOption';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

type Photo = {
	id: string;
	url: string;
	title: string;
	slug: string;
	createdAt: Date;
	updatedAt: Date;
};

async function getOptions(search: string) {
	const photos: Photo[] = await fetch(
		`http://localhost:3000/api/photos?search=${search}`
	).then(res => res.json());

	return photos;
}

type Props = {
	search: string;
};

export const SearchOptionsDrawer = async ({ search }: Props) => {
	const options = await getOptions(search);

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
