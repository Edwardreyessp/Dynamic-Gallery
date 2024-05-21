'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

export const ThemeSwitch = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	if (!mounted) return null;

	if (theme === 'dark')
		return (
			<MoonIcon onClick={toggleTheme} className='w-6 h-6 cursor-pointer' />
		);

	return <SunIcon onClick={toggleTheme} className='w-6 h-6 cursor-pointer' />;
};
