// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
	const t = useTranslations('Navbar');

	const navigation = [
		{ name: t('home'), href: '/' },
		{ name: t('about'), href: '/about' },
	];

	return (
		<div className='flex items-center gap-4 p-4'>
			<Link href='/'>
				<Image
					src='logo.svg'
					alt='Logo'
					width={50}
					height={50}
					style={{ aspectRatio: '1/1' }}
				/>
			</Link>
			<div className='flex'>
				{navigation.map(item => (
					<Link
						key={item.name}
						href={item.href}
						className='hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
					>
						{item.name}
					</Link>
				))}
			</div>
		</div>
	);
};
