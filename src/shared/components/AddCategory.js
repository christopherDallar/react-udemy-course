import React, { useState } from "react";

export const AddCategory = () => {
	const [inputValue, setInputValue] = useState("Hello World");

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Submit Done");
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>{inputValue}</h1>
			<input type="text" value={inputValue} onChange={handleInputChange} />
		</form>
	);
};
