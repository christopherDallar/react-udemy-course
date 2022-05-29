import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from './../../hooks/useForm';
import { TodoList } from './atomic/TodoList';

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

	const handleDelete = (todoId) => {
		const action = {
			type: 'delete',
			payload: todoId,
		};

		dispatch(action);
	};

	const handleToggle = (todoId) => {
		dispatch({
			type: 'toggle',
			payload: todoId,
		});
	};

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	return (
		<div className='todoApp'>
			<h1>TodoApp ( {todos.length} )</h1>
			<hr />

			<div className='row'>
				<div className='col-7'>
					<TodoList
						todos={todos}
						handleDelete={handleDelete}
						handleToggle={handleToggle}
					/>
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
