import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		counter: 10,
	},
	reducers: {
		increment: (state, { payload = 1 }) => {
			state.counter += payload;
		},
		decrement: (state) => {
			state.counter--;
		},
	},
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions;
