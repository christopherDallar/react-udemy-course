import React from 'react';
import { Grid, Typography } from '@mui/material';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';

export const NothingSelectedView = () => {
	return (
		<Grid
			container
			spacing={0}
			direction='column'
			alignItems='center'
			justifyContent='center'
			sx={{
				minHeight: 'calc(100vh - 110px)',
				backgroundColor: 'primary.main',
				borderRadius: 3,
			}}
		>
			<Grid item xs={12}>
				<StarOutlineOutlinedIcon sx={{ fontSize: 100, color: 'white' }} />
			</Grid>
			<Grid item xs={12}>
				<Typography color='white' variant='h5'>
					Select or create a note
				</Typography>
			</Grid>
		</Grid>
		// <div className='nothing__main-content'>
		// 	<p>
		// 		Select something
		// 		<br />
		// 		pr create an entry!
		// 	</p>

		// 	<i className='far fa-star fa-4x mt-5'></i>
		// </div>
	);
};
