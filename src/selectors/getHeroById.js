import { heroes } from './../data/heroes';

export const getHeroesById = (id = '') => {
	console.log('get hero by id call');
	return heroes.find((hero) => hero.id === id);
};
