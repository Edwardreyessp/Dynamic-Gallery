import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
	const t = useTranslations('Footer');

	return (
		<footer className='bg-white rounded-lg shadow dark:bg-gray-900 m-4'>
			<div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
				<div className='sm:flex sm:items-center sm:justify-between'>
					<Link
						href='https://edwardreyessp.dev/'
						className='flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse'
					>
						<Image
							src='/Logo.png'
							alt='Logo'
							width={32}
							height={32}
							style={{ aspectRatio: '1/1' }}
						/>
						<span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
							Edward
						</span>
					</Link>
					<ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400'>
						<li>
							<Link
								href='https://www.edwardreyessp.dev'
								className='hover:underline me-4 md:me-6'
							>
								{t('about')}
							</Link>
						</li>
						<li>
							<Link href='#' className='hover:underline me-4 md:me-6'>
								{t('privacy')}
							</Link>
						</li>
						<li>
							<Link href='#' className='hover:underline me-4 md:me-6'>
								{t('license')}
							</Link>
						</li>
						<li>
							<Link href='#' className='hover:underline'>
								{t('contact')}
							</Link>
						</li>
					</ul>
				</div>
				<hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
				<span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
					© 2024{' '}
					<Link href='https://edwardreyessp.dev/' className='hover:underline'>
						Edwardreyessp™
					</Link>
					. {t('rights')}
				</span>
			</div>
		</footer>
	);
};
