import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const Layout = () => {
	const { counter, increment } = useCounter(1);

	const { data } = useFetch(
		`https://www.breakingbadapi.com/api/quotes/${counter}`
	);

	const { quote } = !!data && data[0];

	const pTag = useRef();

	const [boxSize, setBoxSize] = useState({});

	useLayoutEffect(() => {
		console.log('hey');

		setBoxSize(pTag.current.getBoundingClientRect());
		console.log();

		// return () => {
		// 	second
		// };
	}, [quote]);

	return (
		<div>
			<h1>Layout Effect!!!!</h1>
			<hr />

			<blockquote className='layout blockquote text-right'>
				<p ref={pTag}>{quote}</p>
			</blockquote>

			<pre>{JSON.stringify(boxSize, null, 3)}</pre>

			<button className='btn btn-primary' onClick={() => increment()}>
				Next quote
			</button>
		</div>
	);
};
