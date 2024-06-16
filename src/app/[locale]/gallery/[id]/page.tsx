import { PhotoCard } from '@/features/photo/PhotoCard';
import prisma from '@/lib/db';
import { Photo } from '@prisma/client';
import Link from 'next/link';
import { permanentRedirect } from 'next/navigation';

const PhotoPage = async ({ params: { id } }: { params: { id: string } }) => {
	const photo: Photo | null = await prisma.photo.findUnique({
		where: {
			id,
		},
	});

	if (!photo) {
		permanentRedirect('/gallery');
	}

	return (
		<section className='py-24'>
			<div className='container'>
				<div>
					<Link
						href='/gallery'
						className='font-semibold italic text-sky-600 underline'
					>
						Back to photos
					</Link>
				</div>

				<div className='mt-10 w-1/3'>
					<PhotoCard photo={photo} />
				</div>
			</div>
		</section>
	);
};

export default PhotoPage;