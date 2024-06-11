'use server';

import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { photos } from '@/shared/utils';

export async function createPhoto(formData: FormData) {
	const title = formData.get('title') as string;
	const url = formData.get('image') as string;
	const slug = formData.get('slug') as string;
	const tags = formData.get('tags') as string;

	await prisma.photo.create({
		data: {
			title,
			url,
			slug,
			tags,
		},
	});

	revalidatePath('/gallery');
	redirect('/gallery');
}

export async function createDB() {
	await prisma.photo.createMany({
		data: photos,
	});

	revalidatePath('/gallery');
	redirect('/gallery');
}
