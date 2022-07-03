import React, { useMemo } from 'react';
import { Grid, Typography, Button, TextField } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { ImageGallery } from './../components';
import { useSelector } from 'react-redux';
import { useForm } from './../../../hooks';

export const NoteView = () => {
	const { active: note } = useSelector((state) => state.journal);
	const { body, title, date, onInputChange, formState } = useForm(note);

	const onSubmitForm = (e) => {
		e.preventDefault();
		console.log(formState);
	};

	const dateString = useMemo(() => {
		const newDate = new Date(date);
		return newDate.toUTCString();
	}, [date]);

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
				<Button color='primary' sx={{ padding: 2 }}>
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
