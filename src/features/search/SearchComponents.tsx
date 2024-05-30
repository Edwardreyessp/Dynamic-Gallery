'use client';
import { useState } from 'react';
import { SearchInput, SearchOptions } from './';

type Props = {
	placeholder: string;
	textButton: string;
};

export const SearchComponents = (props: Props) => {
	const [inputText, setInputText] = useState('');

	return (
		<>
			<SearchInput
				{...props}
				setInputText={setInputText}
				inputText={inputText}
			/>
			<SearchOptions search={inputText} />
		</>
	);
};
