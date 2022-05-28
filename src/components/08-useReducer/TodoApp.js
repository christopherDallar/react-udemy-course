import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';

const initialState = [
	{
		id: new Date().getTime(),
		desc: 'Learn React',
		done: false,
	},
];

export const TodoApp = () => {
	const [todos] = useReducer(todoReducer, initialState);

	console.log(todos);

	return (
		<div className='todoApp'>
			<h1>TodoApp ( {todos.length} )</h1>
			<hr />

			<div className='row'>
				<div className='col-7'>
					<ul className='list-group list-group-flush'>
						{todos.map((todo, idx) => (
							<li className='list-group-item' key={todo.id}>
								<p className='text-center'>
									{idx + 1}.{todo.desc}
								</p>
								<button className='btn btn-danger'>Delete</button>
							</li>
						))}
					</ul>
				</div>

				<div className='col-5'>
					<h4>Agregar TODO</h4>
					<hr />

					<form>
						<input
							type='text'
							name='description'
							placeholder='Learn...'
							className='form-control'
						/>

						<button className='btn btn-outline-primary mt-1 btn-block'>
							Add
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
