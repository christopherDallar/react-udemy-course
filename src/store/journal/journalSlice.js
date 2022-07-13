const { createSlice } = require('@reduxjs/toolkit');

const noteFormat = (note) => ({
	id: note.id,
	title: note.title,
	body: note.body,
	date: note.date,
	imageUrls: note.imageUrls && note.imageUrls.length > 0 ? note.imageUrls : [],
});

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
			state.notes.push(noteFormat(payload));

			state.isSaving = false;
		},
		setActiveNote: (state, { payload }) => {
			state.active = noteFormat(payload);

			state.messageSaved = '';
		},
		setNotes: (state, { payload }) => {
			state.notes = payload.map((note) => noteFormat(note));
		},
		setSaving: (state) => {
			state.isSaving = true;

			state.messageSaved = '';
		},
		updatedNote: (state, { payload }) => {
			state.isSaving = false;
			state.notes = state.notes.map((note) =>
				payload.id === note.id ? noteFormat(payload) : note
			);

			state.messageSaved = `${payload.title}, updated`;
		},
		setPhotosToActiveNote: (state, { payload }) => {
			state.active.imageUrls = [...payload];

			state.isSaving = false;
		},
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
	updatedNote,
	setPhotosToActiveNote,
} = journalSlice.actions;
