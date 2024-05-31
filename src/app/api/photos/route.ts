import prisma from '@/lib/db';

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

	const photos = await prisma.photo.findMany({
		where: {
			slug: {
				contains: search,
			},
		},
	});

	return new Response(JSON.stringify(photos), {
		headers: {
			'content-type': 'application/json',
		},
	});
}

export async function POST(request: Request) {
	const { title, image, slug } = await request.json();

	const photo = await prisma.photo.create({
		data: {
			title,
			url: image,
			slug,
		},
	});

	return new Response(JSON.stringify(photo), {
		headers: {
			'content-type': 'application/json',
		},
	});
}
