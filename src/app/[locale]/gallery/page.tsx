import { Gallery } from '@/features/gallery/Gallery';
import { SearchBar } from '@/features/search';

const GalleryPage = async ({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) => {
	return (
		<div className='flex-1 flex items-center flex-col px-12'>
			<SearchBar style={{ marginBottom: 16 }} />
			<Gallery query={(searchParams.search as string) ?? ''} />
		</div>
	);
};

export default GalleryPage;
