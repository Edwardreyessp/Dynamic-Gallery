import prisma from '@/lib/db';

export async function GET(request: Request) {
	console.log('GET request', request);
	const search = new URL(request.url).searchParams.get('search');
	console.log('search', search);

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
