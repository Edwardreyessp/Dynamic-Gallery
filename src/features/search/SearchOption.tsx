'use client';
import { useRouter, useSearchParams } from 'next/navigation';

type Props = {
	value: string;
	children: React.ReactNode;
};

export const SearchOption = ({ children, value }: Props) => {
	const searchParams = useSearchParams();
	const router = useRouter();

	const onClick = () => {
		const params = new URLSearchParams(searchParams.toString());
		params.set('search', value);

		router.push(`gallery?${params.toString()}`);
	};

	return (
		<div
			className='flex gap-2 p-3 hover:bg-gray-300 dark:hover:bg-slate-600 cursor-pointer'
			onClick={onClick}
		>
			{children}
		</div>
	);
};
