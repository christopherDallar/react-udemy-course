import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPokemons());
	});

	return (
		<>
			<h1>Pokemon App</h1>
			<hr />

			<ul>
				<li>Hello</li>
				<li>Hello</li>
				<li>Hello</li>
			</ul>
		</>
	);
};
