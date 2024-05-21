'use client';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { usePathname, useRouter } from '@/navigation';
import { LanguageIcon } from '@heroicons/react/24/solid';
import { useParams } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';

type Props = {
	children: React.ReactNode;
	defaultValue: string;
	label: string;
};

export const LocaleSwitcherSelect = (props: Props) => {
	const { children, defaultValue, label } = props;
	const [locale, setLocale] = useState(defaultValue);
	const router = useRouter();
	const pathname = usePathname();
	const params = useParams();
	const [isPending, startTransition] = useTransition();

	useEffect(() => {
		startTransition(() => {
			router.replace(
				// @ts-expect-error -- TypeScript will validate that only known `params`
				// are used in combination with a given `pathname`. Since the two will
				// always match for the current route, we can skip runtime checks.
				{ pathname, params },
				{ locale }
			);
			router.refresh();
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [locale]);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<LanguageIcon
					className={`h-6 w-6 cursor-pointer ${
						isPending ? 'opacity-50 pointer-events-none' : ''
					}`}
				/>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-48 mr-8'>
				<DropdownMenuLabel>{label}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuRadioGroup value={locale} onValueChange={setLocale}>
					{children}
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
