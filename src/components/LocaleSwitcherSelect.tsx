'use client';
import { useRouter, usePathname } from '@/navigation';
import { useParams } from 'next/navigation';
import type { ChangeEvent } from 'react';
import { useTransition } from 'react';

type Props = {
	children: React.ReactNode;
	defaultValue: string;
	label: string;
};

export const LocaleSwitcherSelect = (props: Props) => {
	const { children, defaultValue, label } = props;
	const router = useRouter();
	const pathname = usePathname();
	const params = useParams();
	const [isPending, startTransition] = useTransition();

	const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const nextLocale = event.target.value;
		startTransition(() => {
			router.replace(
				// @ts-expect-error -- TypeScript will validate that only known `params`
				// are used in combination with a given `pathname`. Since the two will
				// always match for the current route, we can skip runtime checks.
				{ pathname, params },
				{ locale: nextLocale }
			);
		});
	};

	return (
		<label
			className={`relative inline-block bg-gray-100 rounded-md px-2 py-1 text-sm font-medium text-gray-900 cursor-pointer ${
				isPending ? 'opacity-50 pointer-events-none' : ''
			}`}
		>
			<p className='sr-only'>{label}</p>
			<select
				className='inline-flex appearance-none bg-transparent py-3 pl-2 pr-6'
				defaultValue={defaultValue}
				disabled={isPending}
				onChange={onSelectChange}
			>
				{children}
			</select>
			<span className='pointer-events-none absolute right-2 top-[8px]'>⌄</span>
		</label>
	);
};
