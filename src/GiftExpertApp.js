import { React, useState } from "react";
import { AddCategory } from "./shared/components/AddCategory";

export const GiftExpertApp = () => {
	const [categories] = useState(["One punch", "Samurai x", "Dragon Ball"]);

	// const HandleAddCategory = () => {
	// 	// setCategories((cat) => {
	// 	// 	return [...cat, "HunterXHunter", "Digimon"];
	// 	// });

	// 	setCategories([...categories, "HunterXHunter", "Digimon"]);
	// };

	return (
		<>
			<h1>GiftExpertApp</h1>
			<AddCategory />
			<hr></hr>

			<ol>
				{categories.map((cat, i) => (
					<li key={cat + i}>{cat}</li>
				))}
			</ol>
		</>
	);
};
