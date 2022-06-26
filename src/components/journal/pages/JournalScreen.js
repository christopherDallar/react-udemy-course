import React from 'react';
import { IconButton } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { JournalLayout } from './../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';

export const JournalScreen = () => {
	return (
		<JournalLayout>
			<NothingSelectedView />
			{/* <NoteView /> */}

			<IconButton
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
