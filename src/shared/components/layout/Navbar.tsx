import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { LocaleSwitcher, ThemeSwitch } from '../config';

export const Navbar = () => {
	const t = useTranslations('Navbar');

	const navigation = [
		{ name: t('home'), href: '/' },
		{ name: t('about'), href: '/about' },
	];

	return (
		<nav className='flex items-center justify-between gap-4 p-4'>
			<div className='flex items-center gap-4'>
				<Link href='/'>
					<Image
						src='logo.svg'
						alt='Logo'
						width={50}
						height={50}
						style={{ aspectRatio: '1/1' }}
					/>
				</Link>
				<ul className='flex'>
					{navigation.map(item => (
						<li key={item.name}>
							<Link
								href={item.href}
								className='hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
							>
								{item.name}
							</Link>
						</li>
					))}
				</ul>
			</div>

			<div className='flex gap-4'>
				<LocaleSwitcher />
				<ThemeSwitch />
			</div>
		</nav>
	);
};
