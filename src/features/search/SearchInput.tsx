import { setSearchQuery } from '@/actions/actions';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useTranslations } from 'next-intl';

export const SearchInput = () => {
	const t = useTranslations('SearchBar');

	return (
		<form className='max-w-md mx-auto w-full' action={setSearchQuery}>
			<label
				htmlFor='default-search'
				className='mb-2 font-medium text-gray-900 sr-only dark:text-white'
			>
				Search
			</label>
			<div className='relative'>
				<div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
					<MagnifyingGlassIcon className='h-5 w-5 text-gray-400 dark:text-gray-300' />
				</div>
				<input
					type='search'
					id='search'
					name='search'
					className='block w-full p-4 ps-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none'
					placeholder={t('placeholder')}
					// defaultValue={searchParams.get('search') ?? ''}
				/>
				<button
					type='submit'
					className='text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
				>
					{t('button')}
				</button>
			</div>
		</form>
	);
};
