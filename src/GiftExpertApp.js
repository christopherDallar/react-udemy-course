import { React, useState } from 'react';
import { AddCategory } from './shared/components/AddCategory';

export const GiftExpertApp = () => {
	const [categories, setCategories] = useState([
		'One punch',
		'Samurai x',
		'Dragon Ball',
	]);

	return (
		<>
			<h1>GiftExpertApp</h1>
			<AddCategory setCategories={setCategories} />
			<hr></hr>

			<ol>
				{categories.map((cat, i) => (
					<li key={cat + i}>{cat}</li>
				))}
			</ol>
		</>
	);
};
