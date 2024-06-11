import { createDB, createPhoto } from '@/actions/actions';

const CreatePage = () => {
	return (
		<div className='flex-1 flex items-center flex-col'>
			<form action={createPhoto}>
				<input type='text' name='title' id='title' placeholder='Title' />
				<input type='text' name='image' id='image' placeholder='Image URL' />
				<input type='text' name='slug' id='slug' placeholder='Slug' />
				<input
					type='text'
					name='tags'
					id='tags'
					placeholder='Tag1, Tag2, Tag3, ...'
				/>
				<input
					type='submit'
					value='Create Post'
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-opacity-50'
				/>
			</form>
			<form action={createDB}>
				<input
					type='submit'
					value='Create Posts in DB'
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-opacity-50'
				/>
			</form>
		</div>
	);
};

export default CreatePage;
