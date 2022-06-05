import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from './../../hooks/useForm';
import { getHeroesByName } from './../../selectors/getHeroByName';
import { HeroCard } from './../hero/HeroCard';

export const SearchScreen = () => {
	const navigate = useNavigate();
	const location = useLocation();

	// If q doesn't exist in the query string object, set it to an empty string
	const { q = '' } = queryString.parse(location.search);

	const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

	const [{ searchText }, handleInputChange] = useForm({
		searchText: q,
	});

	const handleSearch = (e) => {
		e.preventDefault();

		navigate(`?q=${searchText}`); // Without / it will take the current path and add the query params
	};

	return (
		<>
			<h1>Searcher</h1>
			<hr />

			<div className='row'>
				<div className='col-5'>
					<h4>Search</h4>

					<form onSubmit={handleSearch}>
						<input
							type='text'
							placeholder='Search a hero'
							className='form-control'
							name='searchText'
							autoComplete='off'
							onChange={handleInputChange}
							value={searchText}
						/>

						<button className='btn btn-outline-primary mt-1' type='submit'>
							Search...
						</button>
					</form>
				</div>

				<div className='col-7'>
					<h4>Results</h4>
					<hr />

					{heroesFiltered.map((hero) => (
						<HeroCard key={hero.id} {...hero} />
					))}
				</div>
			</div>
		</>
	);
};
