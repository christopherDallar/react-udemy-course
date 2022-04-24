import { React, useState } from "react";

export const GiftExpertApp = () => {
	// const categories = ["One punch", "Samurai x", "Dragon Ball"];
	const [categories, setCategories] = useState([
		"One punch",
		"Samurai x",
		"Dragon Ball",
	]);

	const HandleAddCategory = () => {
		// setCategories((cat) => {
		// 	return [...cat, "HunterXHunter", "Digimon"];
		// });

		setCategories([...categories, "HunterXHunter", "Digimon"]);
	};

	return (
		<>
			<h1>GiftExpertApp</h1>
			<hr></hr>
			<button onClick={HandleAddCategory}>Agregar</button>
			<ol>
				{categories.map((cat, i) => (
					<li key={cat + i}>{cat}</li>
				))}
			</ol>
		</>
	);
};
