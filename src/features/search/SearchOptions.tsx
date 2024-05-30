'use client';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { ScrollArea } from '@/components/ui/scroll-area';
import { SearchOption } from './';

type Photo = {
	id: string;
	url: string;
	title: string;
	slug: string;
	createdAt: Date;
	updatedAt: Date;
};

type Props = {
	search: string;
};

export const SearchOptions = ({ search }: Props) => {
	const [photos, setPhotos] = useState<Photo[]>([]);
	const [query] = useDebounce(search, 500);

	useEffect(() => {
		fetch(`/api/photos?search=${query}`)
			.then(res => res.json())
			.then(data => setPhotos(data));
	}, [query]);

	return (
		<div className='relative h-0 w-full max-w-md'>
			<ScrollArea className='absolute max-h-[200px] h-fit w-full max-w-md rounded-md bg-gray-50 dark:bg-gray-700'>
				{photos.map(option => (
					<SearchOption key={option.id} value={option.slug}>
						<MagnifyingGlassIcon className='h-5 w-5 text-gray-400 dark:text-gray-300' />
						<span>{option.title}</span>
					</SearchOption>
				))}
			</ScrollArea>
		</div>
	);
};
