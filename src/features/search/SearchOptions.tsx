import { ScrollArea } from '@/components/ui/scroll-area';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export const SearchOptions = () => {
	return (
		<ScrollArea className='h-[200px] w-full max-w-md rounded-md border bg-gray-50 dark:bg-gray-700'>
			<div className='flex gap-4 p-4 hover:bg-gray-300 dark:hover:bg-slate-600'>
				<MagnifyingGlassIcon className='h-5 w-5 text-gray-400 dark:text-gray-300' />
				<span>United States</span>
			</div>
		</ScrollArea>
	);
};
