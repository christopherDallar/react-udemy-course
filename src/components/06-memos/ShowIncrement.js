import React, { memo } from 'react';
import PropTypes from 'prop-types';

export const ShowIncrement = memo(({ increment }) => {
	console.log('Re rendered :(');

	return (
		<button
			className='btn btn-primary'
			onClick={() => {
				increment(5);
			}}
		>
			Increment
		</button>
	);
});

ShowIncrement.propTypes = {
	increment: PropTypes.func.isRequired,
};
