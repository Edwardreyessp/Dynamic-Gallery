'use server';

import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createPhoto(formData: FormData) {
	const title = formData.get('title') as string;
	const image = formData.get('image') as string;
	const slug = formData.get('slug') as string;

	await prisma.photo.create({
		data: {
			title,
			url: image,
			slug,
		},
	});

	revalidatePath('/gallery');
	redirect('/gallery');
}
