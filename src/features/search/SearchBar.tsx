import { SearchInput } from './';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	search: string;
}

export const SearchBar = (props: Props) => {
	return (
		<div className='w-full flex flex-col gap-4 items-center' {...props}>
			<SearchInput />
			{/* <SearchOptions search={search} /> */}
		</div>
	);
};
