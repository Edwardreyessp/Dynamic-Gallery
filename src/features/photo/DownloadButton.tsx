'use client';
import { Button } from '@/shared/components/ui';

type Props = {
	url: string;
	title: string;
	children: React.ReactNode;
};

export const DownloadButton = (props: Props) => {
	const { url, title, children } = props;

	const handleDownload = async () => {
		// Fetch the image and convert it to a blob
		const response = await fetch(url);
		const blob = await response.blob();

		// Create a link element
		const link = document.createElement('a');
		link.href = URL.createObjectURL(blob);
		const extention = url.split('.').pop();
		link.download = title + '.' + extention; // Set the desired file name
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);

		// Release the object URL
		URL.revokeObjectURL(link.href);
	};

	return <Button onClick={handleDownload}>{children}</Button>;
};
