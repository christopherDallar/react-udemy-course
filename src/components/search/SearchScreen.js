import React from 'react';
import { useForm } from './../../hooks/useForm';
import { getHeroesByName } from './../../selectors/getHeroByName';
import { HeroCard } from './../hero/HeroCard';

export const SearchScreen = () => {
	const [{ searchText }, handleInputChange, reset] = useForm({
		searchText: '',
	});

	const heroesFiltered = getHeroesByName('hello');

	const handleSearch = (e) => {
		e.preventDefault();

		console.log(searchText);

		reset();
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
