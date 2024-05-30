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
	const search = new URL(request.url).searchParams.get('search');

	// Return a empty array if no search query is provided
	if (!search) {
		return new Response(JSON.stringify([]), {
			headers: {
				'content-type': 'application/json',
			},
		});
	}

	const photos = await getPhotos(search);

	return new Response(JSON.stringify(photos), {
		headers: {
			'content-type': 'application/json',
		},
	});
}
