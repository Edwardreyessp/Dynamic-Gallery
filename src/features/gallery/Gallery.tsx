import { Photo } from '@prisma/client';
import Image from 'next/image';

async function getPhotos(query: string) {
	const res = await fetch(
		`${process.env.DOMAIN_API_URL}/photos?search=${query}`
	);
	return res.json();
}

type Props = {
	query: string;
};

export const Gallery = async ({ query }: Props) => {
	const photos: Photo[] = await getPhotos(query);

	return (
		<div>
			{photos.map(photo => (
				<div key={photo.id}>
					<Image
						src={photo.url}
						alt={photo.title}
						width={500}
						height={500}
						style={{ width: 'auto', height: 'auto' }}
					/>
					<p>{photo.title}</p>
				</div>
			))}
		</div>
	);
};
