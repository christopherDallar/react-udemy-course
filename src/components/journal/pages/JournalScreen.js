import React from 'react';
// import { Typography } from '@mui/material';
import { JournalLayout } from './../layout/JournalLayout';
// import { Sidebar } from '../Sidebar';
// import { NoteScreen } from '../../notes/NoteScreen';
import { NothingSelectedView } from '../views';

export const JournalScreen = () => {
	return (
		<JournalLayout>
			{/* <Sidebar />

			<main>
				<NoteScreen />
			</main> */}

			<NothingSelectedView />

			{/* NoteView */}
		</JournalLayout>
	);
};
