import prisma from '@/lib/db';

export async function getPhotos(search: string) {
	if (!search) {
		return [];
	}

	const photos = await prisma.photo.findMany({
		where: {
			slug: {
				contains: search,
			},
		},
	});

	return photos;
}

export async function GET(request: Request) {
	return Response.json({ message: 'GET request' });
}
