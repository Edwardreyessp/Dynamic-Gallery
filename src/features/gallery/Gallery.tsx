import prisma from '@/lib/db';
import { Photo } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
	query: string;
};

export const Gallery = async ({ query }: Props) => {
	const photos: Photo[] = await prisma.photo.findMany({
		where: {
			tags: {
				contains: query,
			},
		},
	});

	return (
		<div className='columns-[14rem] w-full'>
			{photos.map(photo => (
				<Link key={photo.id} href={`/gallery/${photo.id}?search=${query}`}>
					<Image
						src={photo.url}
						alt={photo.title}
						width={256}
						height={256}
						className='w-auto h-auto rounded-md mb-4 duration-200 trasition-transform ease-in-out cursor-pointer hover:scale-105'
					/>
				</Link>
			))}
		</div>
	);
};
