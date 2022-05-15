import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const UiAddCategory = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState(''); // useState() is undefined

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
		console.log('handle input change called', e);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('handleSubmit called', e);

		if (inputValue.trim().length > 2) {
			setCategories((cat) => [inputValue, ...cat]);
			setInputValue('');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>{inputValue}</h1>
			<input type='text' value={inputValue} onChange={handleInputChange} />
		</form>
	);
};

UiAddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
};
