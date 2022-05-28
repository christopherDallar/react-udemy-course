export const todoReducer = (state = [], action) => {
	// eslint-disable-next-line default-case
	switch (action.type) {
		case 'add':
			return [...state, action.payload];

		case 'delete':
			return state.filter((stateFil) => stateFil.id !== action.payload);
	}

	return state;
};
