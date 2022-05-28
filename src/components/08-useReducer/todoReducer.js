export const todoReducer = (state = [], action) => {
	// eslint-disable-next-line default-case
	switch (action.type) {
		case 'add':
			return [...state, action.payload];
	}

	return state;
};
