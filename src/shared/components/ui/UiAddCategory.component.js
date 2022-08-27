import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const UiAddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState(''); // useState() is undefined

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    // console.log('handle input change called', e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newInputValue = inputValue.trim();

    if (newInputValue.length > 2) {
      onNewCategory(newInputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{inputValue}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

UiAddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
