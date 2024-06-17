import { Photo } from '@prisma/client';
import Image from 'next/image';
import React from 'react';
import { DownloadButton } from './';

type Props = {
	photo: Photo;
	downloadText: string;
};

export const PhotoCard = ({ photo, downloadText }: Props) => {
	return (
		<div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
			<Image
				src={photo.url}
				alt={photo.title}
				width={800}
				height={600}
				priority
				className='object-cover w-auto h-auto rounded-t-lg'
			/>
			<div className='p-5'>
				<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
					{photo.title}
				</h5>
				<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
					<b>Tags: </b>
					{photo.tags}
				</p>
				<div className='flex justify-between flex-row-reverse'>
					<DownloadButton url={photo.url} title={photo.title}>
						{downloadText}
					</DownloadButton>
				</div>
			</div>
		</div>
	);
};
