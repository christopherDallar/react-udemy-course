import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState(''); // useState() is undefined

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (inputValue.trim().length > 2) {
			setCategories((cat) => [...cat, inputValue]);
			setInputValue('');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>"{inputValue}" (Must to be larger of 2 length)</h1>
			<input type='text' value={inputValue} onChange={handleInputChange} />
		</form>
	);
};

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
};
