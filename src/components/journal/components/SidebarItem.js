import {
	ListItem,
	ListItemButton,
	ListItemIcon,
	Grid,
	ListItemText,
} from '@mui/material';
import React, { useMemo } from 'react';
import { TurnedInNot } from '@mui/icons-material';

export const SidebarItem = ({ title = '', body }) => {
	const excerptTitle = useMemo(
		() => (title.length > 17 ? title.substring(0, 17) + '...' : title),
		[title]
	);

	return (
		<ListItem>
			<ListItemButton>
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
