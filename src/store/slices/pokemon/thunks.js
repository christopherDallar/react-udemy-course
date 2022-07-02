import { startLoadingPokemons } from './pokemonSlice';

export const getPokemons = (page = 0) => {
	return async (dispatch, getState) => {
		dispatch(startLoadingPokemons());

		// Realizar petición http

		// dispatch(setPokemons( ))
	};
};
