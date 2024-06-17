import { PhotoCard } from '@/features/photo/PhotoCard';
import { SearchBar } from '@/features/search';
import prisma from '@/lib/db';
import { Photo } from '@prisma/client';
import { getTranslations } from 'next-intl/server';
import { permanentRedirect } from 'next/navigation';

const PhotoPage = async ({
	params,
	searchParams,
}: {
	params: { id: string; locale: string };
	searchParams: { [key: string]: string | string[] | undefined };
}) => {
	const { locale } = params;
	const t = await getTranslations({ locale, namespace: 'PhotoCard' });

	const photo: Photo | null = await prisma.photo.findUnique({
		where: {
			id: params.id,
		},
	});

	if (!photo) {
		permanentRedirect('/gallery');
	}

	return (
		<section className='py-24 flex-1'>
			<div className='container flex flex-col items-center justify-center gap-8'>
				<SearchBar search={(searchParams.search as string) ?? ''} />

				<PhotoCard photo={photo} downloadText={t('download')} />
			</div>
		</section>
	);
};

export default PhotoPage;
