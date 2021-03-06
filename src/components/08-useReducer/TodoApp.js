import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './atomic/TodoList';
import { TodoAdd } from './atomic/TodoAdd';

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

	const handleAddTodo = (newTodo) => {
		dispatch({
			type: 'add',
			payload: newTodo,
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
					<TodoAdd handleAddTodo={handleAddTodo} />
				</div>
			</div>
		</div>
	);
};
