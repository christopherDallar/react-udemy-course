import { React, useState } from 'react';
import { UiAddCategory } from '../shared/components/ui/UiAddCategory.component';
import { GifGrid } from './../shared/components/gif/GifGrid.component';

export const ViewGiftExpert = () => {
	const [categories, setCategories] = useState(['One punch']);

	return (
		<>
			<h1>GiftExpertApp</h1>
			<UiAddCategory setCategories={setCategories} />
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
