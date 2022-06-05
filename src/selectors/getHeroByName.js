import { heroes } from './../data/heroes';

export const getHeroesByName = (name = '') => {
	if (name.length === 0) {
		return [];
	}

	//returns a list of heroes
	return heroes.filter((hero) =>
		hero.superhero.toLowerCase().includes(name.toLowerCase())
	);
};
