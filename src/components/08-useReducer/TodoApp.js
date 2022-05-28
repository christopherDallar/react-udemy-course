import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from './../../hooks/useForm';

// const initialState = [
// 	{
// 		id: new Date().getTime(),
// 		desc: 'Learn React',
// 		done: false,
// 	},
// ];

const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init);

	const [{ description }, handleInputChange, reset] = useForm({
		description: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		if (description.trim().length < 1) {
			return;
		}

		const newTodo = {
			id: new Date().getTime(),
			desc: description,
			done: false,
		};

		const action = {
			type: 'add',
			payload: newTodo,
		};

		dispatch(action);
		reset();

		console.log('New issue');
	};

	const handleBtnDelete = (todoId) => {
		const action = {
			type: 'delete',
			payload: todoId,
		};

		dispatch(action);
	};

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));

		console.log(localStorage.getItem('todos'));
	}, [todos]);

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
								<button
									className='btn btn-danger'
									onClick={() => handleBtnDelete(todo.id)}
								>
									Delete
								</button>
							</li>
						))}
					</ul>
				</div>

				<div className='col-5'>
					<h4>Agregar TODO</h4>
					<hr />

					<form onSubmit={handleSubmit}>
						<input
							type='text'
							name='description'
							placeholder='Learn...'
							className='form-control'
							value={description}
							onChange={handleInputChange}
						/>

						<button
							type='submit'
							className='btn btn-outline-primary mt-1 btn-block'
						>
							Add
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
