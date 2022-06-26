import React from 'react';

export const InputError = ({ message }) => {
	return message && <span className='inputError'>{message}</span>;
};
