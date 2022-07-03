import {
	ListItem,
	ListItemButton,
	ListItemIcon,
	Grid,
	ListItemText,
} from '@mui/material';
import React, { useMemo } from 'react';
import { TurnedInNot } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../../store/journal';

export const SidebarItem = ({ id, title = '', body, date, imageUrls = [] }) => {
	const dispatch = useDispatch();
	const excerptTitle = useMemo(
		() => (title.length > 17 ? title.substring(0, 17) + '...' : title),
		[title]
	);

	const onClickNote = () => {
		dispatch(setActiveNote({ id, title, body, date, imageUrls }));
	};

	return (
		<ListItem disablePadding>
			<ListItemButton onClick={onClickNote}>
				<ListItemIcon>
					<TurnedInNot />
				</ListItemIcon>
				<Grid container>
					<ListItemText primary={excerptTitle} />
					<ListItemText secondary={body} />
				</Grid>
			</ListItemButton>
		</ListItem>
	);
};
