import React, { useMemo, useState } from 'react';
import { hardTask } from '../../helpers/hardTask';
import { useCounter } from './../../hooks/useCounter';

export const MemoHook = () => {
	const { counter, increment } = useCounter(5000);
	const [show, setShow] = useState(true);

	// Thanks for this, when click on show/hide button dont execute hardTask method
	const memoHardTask = useMemo(() => hardTask(counter), [counter]);

	return (
		<div>
			<h1>MemoHook</h1>
			<h3>
				Counter: <small>{counter}</small>
			</h3>
			<hr />

			<p> {memoHardTask} </p>

			<button className='btn btn-primary' onClick={increment}>
				+1
			</button>

			<button
				className='btn btn-outline-primary ml-3'
				onClick={() => {
					setShow(!show);
				}}
			>
				Show/Hide {JSON.stringify(show)}
			</button>
		</div>
	);
};
