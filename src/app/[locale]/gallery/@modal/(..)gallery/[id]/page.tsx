import { Modal } from '@/features/photo/Modal';
import prisma from '@/lib/db';
import { Photo } from '@prisma/client';
import { getTranslations } from 'next-intl/server';
import { permanentRedirect } from 'next/navigation';

const PhotoModalPage = async ({
	params: { id, locale },
}: {
	params: { id: string; locale: string };
}) => {
	const t = await getTranslations({ locale, namespace: 'PhotoCard' });
	const photo: Photo | null = await prisma.photo.findUnique({
		where: {
			id,
		},
	});

	if (!photo) {
		permanentRedirect('/gallery');
	}

	return <Modal photo={photo} downloadText={t('download')} />;
};

export default PhotoModalPage;
