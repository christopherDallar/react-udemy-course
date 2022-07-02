const { createSlice } = require('@reduxjs/toolkit');

export const journalSlice = createSlice({
	name: 'journal',
	initialState: {
		isSaving: false,
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
		savingNewNote: (state) => {
			state.isSaving = true;
		},
		addNewEmptyNote: (state, { payload }) => {
			state.notes.push({
				id: payload.id,
				title: payload.title,
				body: payload.body,
				date: payload.date,
			});

			state.isSaving = false;
		},
		setActiveNote: (state, { payload }) => {
			state.active = payload;
		},
		setNotes: (state, action) => {},
		setSaving: (state) => {},
		updateNote: (state, action) => {},
		deleteNoteById: (state, action) => {},
	},
});

export const {
	addNewEmptyNote,
	deleteNoteById,
	savingNewNote,
	setActiveNote,
	setNotes,
	setSaving,
	updateNote,
} = journalSlice.actions;
