import React from 'react';
import { Child } from './Child';
import { useState, useCallback } from 'react';

export const Father = () => {
	const arrNumbs = [2, 4, 6, 8, 10];
	const [value, setValue] = useState(0);

	// const increment = (num) => {
	// 	setValue(value + num);
	// };

	const increment = useCallback(
		(num) => {
			setValue((n) => n + num);
		},
		[setValue]
	);

	return (
		<div>
			<h1>Father</h1>
			<p> Total: {value} </p>

			<hr />

			{arrNumbs.map((n) => (
				<Child key={n} number={n} increment={increment} />
			))}
			{/* <Child /> */}
		</div>
	);
};
