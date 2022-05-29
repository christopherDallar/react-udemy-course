export const todoReducer = (state = [], action) => {
	// eslint-disable-next-line default-case
	switch (action.type) {
		case 'add':
			return [...state, action.payload];

		case 'delete':
			return state.filter((todo) => todo.id !== action.payload);

		case 'toggle':
			return state.map((todo) => {
				if (todo.id === action.payload) {
					todo.done = !todo.done;
				}

				return todo;
			});

		case 'toggle-alternative':
			return state.map((todo) =>
				todo.id === action.payload ? { ...todo, done: todo.done } : todo
			);
	}

	return state;
};
