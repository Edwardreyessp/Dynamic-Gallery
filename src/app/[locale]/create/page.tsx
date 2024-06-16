import { createDB, createPhoto } from '@/actions/actions';
import { Button, Input } from '@/shared/components/ui';

const CreatePage = () => {
	return (
		<div className='flex-1 flex items-center justify-center flex-col'>
			<form action={createPhoto} className='max-w-sm w-full'>
				{inputData.map(data => (
					<Input key={data.id} required {...data}>
						{data.label}
					</Input>
				))}
				<Button type='submit' className='w-full'>
					Upload Photo
				</Button>
			</form>
			{process.env.NODE_ENV === 'development' && (
				<form action={createDB}>
					<Button type='submit' className='w-full mt-4'>
						Create Posts in DB
					</Button>
				</form>
			)}
		</div>
	);
};

const inputData = [
	{
		id: 'title',
		name: 'title',
		placeholder: 'My awesome photo title',
		label: 'Title',
	},
	{
		id: 'slug',
		name: 'slug',
		placeholder: 'Little dog in the garden',
		label: 'Description',
	},
	{
		id: 'image',
		name: 'image',
		type: 'url',
		placeholder: 'https://myphoto.png',
		label: 'Image URL',
	},
	{
		id: 'tags',
		name: 'tags',
		placeholder: 'Tag1 Tag2 Tag3 ...',
		label: 'Tags for search',
	},
];

export default CreatePage;
