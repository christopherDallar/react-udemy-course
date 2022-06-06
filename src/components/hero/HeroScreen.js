import React, { useMemo } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { getHeroesById } from './../../selectors/getHeroById';

// import batman from '../../assets/heroes/dc-batman.jpg';

const heroesImgs = require.context('../../assets/heroes', true);

export const HeroScreen = () => {
	const navigate = useNavigate();
	const { heroId } = useParams();

	const hero = useMemo(() => getHeroesById(heroId), [heroId]); //without useMemo with any change on any use state this request will be execute again

	console.log(heroId);

	if (!hero) {
		return <Navigate to='/' />;
	}

	const { id, superhero, publisher, alter_ego, characters, first_appearance } =
		hero;

	// const imgPath = `/assets/${id}.jpg`;

	const handleReturn = () => {
		navigate(-1);
	};

	return (
		<div className='row mt-5'>
			<div className='col-4'>
				<img
					className='img-thumbnail animate__animated animate__bounceInLeft'
					// src={imgPath} // from public/assets
					// src={batman} // Import
					src={heroesImgs(`./${id}.jpg`)}
					alt={hero.superhero}
				/>
			</div>

			<div className='col-8 animate__animated animate__bounceInLeft'>
				<h3>{superhero}</h3>

				<ul className='list-group list-group-flush'>
					<li className='list-group-item'>
						<strong>Alter ego:</strong>
						{alter_ego}
					</li>
					<li className='list-group-item'>
						<strong>Publisher:</strong>
						{publisher}
					</li>
					<li className='list-group-item'>
						<strong>First Appearance:</strong>
						{first_appearance}
					</li>
				</ul>

				<h5 className='mt-5'>Characters</h5>
				<p>{characters}</p>

				<button className='btn btn-outline-info' onClick={handleReturn}>
					Back
				</button>
			</div>
		</div>
	);
};
