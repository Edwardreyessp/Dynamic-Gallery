'use client';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useRouter, useSearchParams } from 'next/navigation';

export const SearchOptions = () => {
	const searchParams = useSearchParams();
	const router = useRouter();

	const search = searchParams.get('search');

	const onOptionClick = (value: string) => {
		const params = new URLSearchParams(searchParams.toString());
		params.set('search', value);
		router.push(`gallery?${params.toString()}`);
	};

	return (
		<ScrollArea className='max-h-[200px] h-fit w-full max-w-md rounded-md border bg-gray-50 dark:bg-gray-700'>
			{search && (
				<div
					className='flex gap-2 p-3 hover:bg-gray-300 dark:hover:bg-slate-600 cursor-pointer'
					onClick={() => onOptionClick(search)}
				>
					<MagnifyingGlassIcon className='h-5 w-5 text-gray-400 dark:text-gray-300' />
					<span>{search}</span>
				</div>
			)}
			{options.map(option => (
				<div
					key={option.value}
					className='flex gap-2 p-3 hover:bg-gray-300 dark:hover:bg-slate-600 cursor-pointer'
					onClick={() => onOptionClick(option.value)}
				>
					<MagnifyingGlassIcon className='h-5 w-5 text-gray-400 dark:text-gray-300' />
					<span>{option.name}</span>
				</div>
			))}
		</ScrollArea>
	);
};

const options = [
	{ name: 'Option 1', value: 'option1' },
	{ name: 'Option 2', value: 'option2' },
	{ name: 'Option 3', value: 'option3' },
];
