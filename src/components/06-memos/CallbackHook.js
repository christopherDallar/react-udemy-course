import React, { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
	const [counter, setCounter] = useState(10);

	// const increment = () => {
	// 	setCounter(counter + 1);
	// };

	// With UseCallBack save on memory position the function passed to memo
	const increment = useCallback(
		(num) => {
			setCounter((c) => c + num);
		},
		[setCounter]
	);

	// The second benefit to would be used useCallback is when useEffect depend of a callback, because with this way avoid the rendering again of that func
	useEffect(() => {
		// ??
	}, [increment]);

	return (
		<div>
			<h1>UseCallbackHook Hook: {counter}</h1>
			<hr />

			<ShowIncrement increment={increment} />
		</div>
	);
};
