'use client';

const CreatePage = () => {
	const createPhoto = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const form = e.target as HTMLFormElement;
		const title = (form.elements.namedItem('title') as HTMLInputElement).value;
		const image = (form.elements.namedItem('image') as HTMLInputElement).value;
		const slug = (form.elements.namedItem('slug') as HTMLInputElement).value;

		console.log(title, image, slug);

		const res = await fetch('/api/photos', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ title, image, slug }),
		});

		if (res.ok) {
			console.log('Photo created');
		} else {
			console.error('Failed to create photo');
		}
	};

	return (
		<div className='flex-1 flex items-center flex-col'>
			<form onSubmit={createPhoto}>
				<input type='text' name='title' id='title' placeholder='Title' />
				<input type='text' name='image' id='image' placeholder='Image URL' />
				<input type='text' name='slug' id='slug' placeholder='Slug' />
				<input
					type='submit'
					value='Create Post'
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-opacity-50'
				/>
			</form>
		</div>
	);
};

export default CreatePage;
