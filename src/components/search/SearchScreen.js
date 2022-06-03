import React from 'react';
import { useForm } from './../../hooks/useForm';

export const SearchScreen = () => {
	const [{ searchText }, handleInputChange, reset] = useForm({
		searchText: '',
	});

	const handleSubmit = (e) => {
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

					<form onSubmit={handleSubmit}>
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
			</div>
		</>
	);
};
