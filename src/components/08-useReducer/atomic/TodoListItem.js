import React from 'react';
import PropTypes from 'prop-types';

export const TodoListItem = ({ todo, idx, handleDelete, handleToggle }) => {
	return (
		<div>
			<li className='list-group-item' key={todo.id}>
				<p
					className={`${todo.done && 'complete'}`}
					onClick={() => handleToggle(todo.id)}
				>
					{idx + 1}.{todo.desc}
				</p>
				<button
					className='btn btn-danger'
					onClick={() => handleDelete(todo.id)}
				>
					Delete
				</button>
			</li>
		</div>
	);
};

TodoListItem.propTypes = {
	todo: PropTypes.object.isRequired,
	idx: PropTypes.number.isRequired,
	handleDelete: PropTypes.func.isRequired,
	handleToggle: PropTypes.func.isRequired,
};
