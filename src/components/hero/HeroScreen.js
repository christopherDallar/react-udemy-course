import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { getHeroesById } from './../../selectors/getHeroById';

export const HeroScreen = () => {
	const { heroId } = useParams();

	const hero = getHeroesById(heroId);

	console.log(heroId);

	if (!hero) {
		return <Navigate to='/' />;
	}

	return (
		<div>
			<h1>HeroScreen</h1>
			<p>{hero.superhero}</p>
		</div>
	);
};
