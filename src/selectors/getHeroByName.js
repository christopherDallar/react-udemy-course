import { heroes } from './../data/heroes';

export const getHeroesByName = (name = '') => {
	//returns a list of heroes
	// return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name.toLowerCase()));

	return heroes;
};
