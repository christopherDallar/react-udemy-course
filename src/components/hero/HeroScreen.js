import React from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { getHeroesById } from './../../selectors/getHeroById';

export const HeroScreen = () => {
	const navigate = useNavigate();
	const { heroId } = useParams();

	const hero = getHeroesById(heroId);

	console.log(heroId);

	if (!hero) {
		return <Navigate to='/' />;
	}

	const { id, superhero, publisher, alter_ego, characters, first_appearance } =
		hero;

	const imgPath = `/assets/${id}.jpg`;

	const handleReturn = () => {
		navigate(-1);
	};

	return (
		<div className='row mt-5'>
			<div className='col-4'>
				<img className='img-thumbnail' src={imgPath} alt={hero.superhero} />
			</div>

			<div className='col-8'>
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
