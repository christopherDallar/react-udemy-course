import React, { useEffect, useMemo, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography, Button, TextField, IconButton } from '@mui/material';
import { UploadOutlined } from '@mui/icons-material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { ImageGallery } from './../components';
import { useForm } from './../../../hooks';
import { setActiveNote, startSaveNote } from '../../../store/journal';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () => {
	const dispatch = useDispatch();
	const {
		active: note,
		messageSaved,
		isSaving,
	} = useSelector((state) => state.journal);
	const { body, title, date, onInputChange, formState } = useForm(note);

	const dateString = useMemo(() => {
		const newDate = new Date(date);
		return newDate.toUTCString();
	}, [date]);

	const fileInputRef = useRef();

	useEffect(() => {
		dispatch(setActiveNote(formState));
		// console.log('effec', formState);
	}, [formState]);

	useEffect(() => {
		if (messageSaved.length > 0) {
			Swal.fire('Updated Note', messageSaved, 'success');
		}
	}, [messageSaved]);

	const onSaveNote = () => {
		dispatch(startSaveNote());
	};

	const onFileInputChange = ({ target }) => {
		if (target.files === 0) {
			return;
		}

		console.log('uploading files', target.files);
		// dispatch( startUploadingFiles(target.files) )
	};

	return (
		<Grid
			container
			direction='row'
			justifyContent='space-between'
			alignItems='center'
			sx={{ mb: 1 }}
		>
			<Grid item>
				<Typography fontSize={39} fontWeight='light'>
					{dateString}
				</Typography>
			</Grid>

			<Grid item>
				<input
					type='file'
					multiple
					ref={fileInputRef}
					onChange={onFileInputChange}
					style={{ display: 'none' }}
				/>

				<IconButton
					color='primary'
					disabled={isSaving}
					onClick={() => fileInputRef.current.click()}
				>
					<UploadOutlined />
				</IconButton>

				<Button
					disabled={isSaving}
					color='primary'
					sx={{ padding: 2 }}
					onClick={onSaveNote}
				>
					<SaveOutlinedIcon sx={{ fontSize: 30, mr: 1 }} />
					Save
				</Button>
			</Grid>

			<Grid container>
				<TextField
					type='text'
					variant='filled'
					fullWidth
					placeholder='Write a title'
					label='Title'
					sx={{ border: 'none', mb: 1 }}
					name='title'
					value={title}
					onChange={onInputChange}
				/>

				<TextField
					type='text'
					variant='filled'
					fullWidth
					multiline
					placeholder='What happened today?'
					minRows={5}
					name='body'
					value={body}
					onChange={onInputChange}
				/>
			</Grid>

			<ImageGallery />
		</Grid>
	);
};
