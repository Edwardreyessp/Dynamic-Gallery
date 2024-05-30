'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useRouter, useSearchParams } from 'next/navigation';
import type { Dispatch, SetStateAction } from 'react';

type Props = {
	placeholder: string;
	textButton: string;
	inputText: string;
	setInputText: Dispatch<SetStateAction<string>>;
};

export const SearchInput = (props: Props) => {
	const { placeholder, textButton, setInputText, inputText } = props;
	const router = useRouter();
	const searchParams = useSearchParams();

	// useEffect(() => {
	// 	const params = new URLSearchParams(searchParams.toString());
	// 	params.set('search', query);
	// 	router.push(pathname + '?' + params.toString(), {
	// 		scroll: false,
	// 	});
	// }, [query, router, pathname, searchParams]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setInputText('');

		const params = new URLSearchParams(searchParams.toString());
		params.set('search', inputText);

		router.push(`gallery?${params.toString()}`);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputText(e.target.value);
	};

	return (
		<form className='max-w-md mx-auto w-full' onSubmit={handleSubmit}>
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
					id='default-search'
					className='block w-full p-4 ps-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none'
					placeholder={placeholder}
					onChange={handleChange}
					value={inputText}
				/>
				<button
					type='submit'
					className='text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
				>
					{textButton}
				</button>
			</div>
		</form>
	);
};
