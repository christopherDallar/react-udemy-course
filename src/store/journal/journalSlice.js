const { createSlice } = require('@reduxjs/toolkit');

export const journalSlice = createSlice({
	name: '',
	initialState: {
		isSaving: true,
		messageSaved: '',
		notes: [],
		active: null,
		// active: {
		//   id: 'abc123',
		//   title: '',
		//   body: '',
		//   date: 1234,
		//   imageUrls: []
		// }
	},
	reducers: {
		addNewEmptyNote: (state, action) => {},
		setActiveNote: (state, action) => {},
		setNotes: (state, action) => {},
		setSaving: (state) => {},
		updateNote: (state, action) => {},
		deleteNoteById: (state, action) => {},
	},
});

export const {
	addNewEmptyNote,
	setActiveNote,
	setNotes,
	setSaving,
	updateNote,
	deleteNoteById,
} = journalSlice.actions;
