import { SearchBar } from '@/features/search';

const GalleryPage = async () => {
	return (
		<div className='flex-1 flex items-center flex-col'>
			<SearchBar />
			<p>Mi nueva imagen</p>
		</div>
	);
};

export default GalleryPage;
