import { heroes } from './../data/heroes';

export const getHeroesByName = (name = '') => {
	console.log('getHeroesByName called');

	if (name.length === 0) {
		return [];
	}

	//returns a list of heroes
	return heroes.filter((hero) =>
		hero.superhero.toLowerCase().includes(name.toLowerCase())
	);
};
