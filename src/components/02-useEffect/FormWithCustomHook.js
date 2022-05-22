import React, { useEffect } from 'react';
import './effects.css';
import { useForm } from './../../hooks/useForm';

export const FormWithCustomHook = () => {
	const [inputValues, handleInputChange] = useForm({
		name: '',
		email: '',
		password: '',
	});

	const { name, email, password } = inputValues;

	// const handleInputChange = ({ target }) => {
	// 	// console.log(target.name);
	// 	// console.log(target.value);
	// 	setFormState({
	// 		...formState,
	// 		[target.name]: target.value,
	// 	});
	// };

	useEffect(() => {
		console.log('Email Changed');
		// return () => {
		//   cleanup
		// };
	}, [email]);

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(inputValues);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>FormWithCustomHook</h1>
			<hr />

			<div className='form-group'>
				<input
					type='text'
					name='name'
					className='form-control'
					placeholder='Your name'
					autoComplete='off'
					value={name}
					onChange={handleInputChange}
				/>
			</div>

			<div className='form-group'>
				<input
					type='text'
					name='email'
					className='form-control'
					placeholder='youremail@gmail.com '
					autoComplete='off'
					value={email}
					onChange={handleInputChange}
				/>
			</div>

			<div className='form-group'>
				<input
					type='password'
					name='password'
					className='form-control'
					placeholder='******'
					value={password}
					onChange={handleInputChange}
				/>
			</div>

			<button type='submit' className='btn btn-primary'>
				Guardar
			</button>
		</form>
	);
};
