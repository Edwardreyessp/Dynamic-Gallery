import prisma from '@/lib/db';

export async function getPhotos(search: string) {
	const photos = await prisma.photo.findMany({
		where: {
			slug: {
				contains: search,
			},
		},
	});

	return photos;
}
