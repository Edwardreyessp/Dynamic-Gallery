import { SearchBar } from '@/features/search';

const GalleryPage = async ({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) => {
	return (
		<div className='flex-1 flex items-center flex-col'>
			<SearchBar search={searchParams.search as string} />
			<p>Mi nueva imagen</p>
		</div>
	);
};

export default GalleryPage;
