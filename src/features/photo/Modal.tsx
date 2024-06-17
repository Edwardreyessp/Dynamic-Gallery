'use client';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { Photo } from '@prisma/client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { DownloadButton } from './';

type Props = {
	photo: Photo;
	downloadText: string;
};

export const Modal = ({ photo, downloadText }: Props) => {
	const router = useRouter();

	return (
		<Dialog defaultOpen>
			<DialogContent
				onCloseAutoFocus={() => {
					router.back();
				}}
			>
				<DialogHeader>
					<Image
						src={photo.url}
						alt={photo.title}
						width={800}
						height={600}
						className='object-cover w-auto h-auto rounded-t-lg'
					/>
					<DialogTitle className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
						{photo.title}
					</DialogTitle>
					<DialogDescription className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
						<b>Tags: </b> {photo.tags}
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<DownloadButton url={photo.url} title={photo.title}>
						{downloadText}
					</DownloadButton>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
