'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from './Button';

export const ThemeSwitch = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	if (!mounted) return null;

	return <Button onClick={toggleTheme}>{theme} Mode</Button>;
};
