import { getPhotos } from '@/app/api/photos/route';
import Image from 'next/image';

const GalleryPage = async () => {
	const photos = await getPhotos('camaleon');

	return (
		<div className='flex-1 flex items-center justify-center'>
			{photos.map(photo => (
				<div key={photo.id} className='p-4'>
					<h2>{photo.title}</h2>
					<Image
						src={photo.url}
						alt={photo.title}
						width={500}
						height={500}
						style={{
							aspectRatio: '16 / 9',
							width: 'auto',
							height: 'auto',
						}}
					/>
				</div>
			))}
		</div>
	);
};

export default GalleryPage;
