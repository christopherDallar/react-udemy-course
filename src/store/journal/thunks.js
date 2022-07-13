import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from './../../firebase/config';
import { loadNotes, fileUpload } from './../../helpers';
import {
	addNewEmptyNote,
	setActiveNote,
	savingNewNote,
	setNotes,
	setSaving,
	updatedNote,
	setPhotosToActiveNote,
	deleteNoteById,
} from './';

export const startNewNote = () => {
	return async (dispatch, getState) => {
		dispatch(savingNewNote());

		const { uid } = getState().auth;

		const newNote = {
			title: '',
			body: '',
			date: new Date().getTime(),
		};

		const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
		await setDoc(newDoc, newNote);

		newNote.id = newDoc.id;

		dispatch(addNewEmptyNote(newNote));
		dispatch(setActiveNote(newNote));
	};
};

export const startLoadingNotes = () => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;

		if (!uid) {
			throw new Error("User's UID doesn't exist");
		}

		const notes = await loadNotes(uid);

		dispatch(setNotes(notes));
	};
};

export const startSaveNote = () => {
	return async (dispatch, getState) => {
		dispatch(setSaving());

		const { uid } = getState().auth;
		const { active: note } = getState().journal;

		const noteToFireStore = { ...note };
		delete noteToFireStore.id;

		const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);

		await setDoc(docRef, noteToFireStore, { merge: true });

		dispatch(updatedNote(note));
	};
};

export const startUploadingFiles = (files = []) => {
	return async (dispatch) => {
		dispatch(setSaving());

		console.log(files);

		// await fileUpload(files[0]);
		// files.forEach(async (file) => {
		//  Una de tras de otra
		// 	await fileUpload(file);
		// });

		const fileUploadPromises = [];

		for (const file of files) {
			fileUploadPromises.push(fileUpload(file));
		}

		// Todas al mismo tiempo
		const imgUrls = await Promise.all(fileUploadPromises);

		console.log(imgUrls);
		dispatch(setPhotosToActiveNote(imgUrls));
	};
};

export const startDeletingNote = () => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;
		const { active: note } = getState().journal;

		const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
		await deleteDoc(docRef);

		dispatch(deleteNoteById(note.id));
	};
};
