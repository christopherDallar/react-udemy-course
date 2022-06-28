import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		counter: 10,
	},
	reducers: {
		increment: (state) => {
			state.counter++;
		},
	},
});

// Action creators are generated for each case reducer function
export const { increment } = counterSlice.actions;
