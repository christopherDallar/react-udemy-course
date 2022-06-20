import React from 'react';

export const InputError = ({ inputName, messages = {} }) => {
	return (
		messages[inputName] && (
			<span className='inputError'>{messages[inputName]}</span>
		)
	);
};
