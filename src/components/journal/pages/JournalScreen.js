import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { JournalLayout } from './../layout/JournalLayout';
import { NothingSelectedView, NoteView } from '../views';
import { startNewNote } from './../../../store/journal';

export const JournalScreen = () => {
	const dispatch = useDispatch();
	const { isSaving, active } = useSelector((state) => state.journal);

	const onClickNewNote = () => {
		dispatch(startNewNote());
	};

	return (
		<JournalLayout>
			{!!active ? <NoteView /> : <NothingSelectedView />}

			<IconButton
				disabled={isSaving}
				onClick={onClickNewNote}
				size='large'
				sx={{
					color: 'white',
					backgroundColor: 'error.main',
					':hover': { backgroundColor: 'error.main', opacity: 0.9 },
					position: 'fixed',
					right: 50,
					bottom: 50,
				}}
			>
				<AddOutlinedIcon />
			</IconButton>
		</JournalLayout>
	);
};
