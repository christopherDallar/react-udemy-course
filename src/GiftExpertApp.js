import { React, useState } from 'react';
import { AddCategory } from './shared/components/AddCategory';
import { GifGrid } from './shared/components/GifGrid';

export const GiftExpertApp = () => {
	const [categories, setCategories] = useState(['One punch']);

	return (
		<>
			<h1>GiftExpertApp</h1>
			<AddCategory setCategories={setCategories} />
			<hr></hr>

			<ol>
				{categories.map((cat, i) => (
					// <li key={cat + i}>{cat}</li>
					<GifGrid key={cat + i} category={cat} />
				))}
			</ol>
		</>
	);
};
