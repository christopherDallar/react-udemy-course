import React, { useState } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { addHours } from 'date-fns';
import { Calendar } from 'react-big-calendar';
import { localizer, getMessagesES } from './../../helpers';
import { Navbar, CalendarEvent, CalendarModal } from '../';

const events = [
	{
		title: 'Birthday boss',
		notes: 'Buy the cake',
		start: new Date(),
		end: addHours(new Date(), 2),
		bgColor: '#fafafa',
		user: {
			_id: '123',
			name: 'Dallar',
		},
	},
];

export const CalendarPage = () => {
	const [lastView, setLastView] = useState(
		localStorage.getItem('lastView') || 'week'
	);

	const eventStyleGetter = (event, start, end, isSelected) => {
		// console.log({ event, start, end, isSelected });

		const style = {
			backgroundColor: '#347cf7',
			borderRadius: '0px',
			opacity: 0.8,
			color: 'white',
		};

		return {
			style,
		};
	};

	const onDoubleClick = (event) => {
		console.log({ doubleClick: event });
	};

	const onSelect = (event) => {
		console.log({ click: event });
	};

	const onViewChanged = (event) => {
		localStorage.setItem('lastView', event);
		setLastView(event);
	};

	return (
		<>
			<Navbar />

			<Calendar
				culture='es'
				localizer={localizer}
				events={events}
				defaultView={lastView}
				startAccessor='start'
				endAccessor='end'
				style={{ height: 'calc(100vh - 80px)' }}
				messages={getMessagesES()}
				components={{
					event: CalendarEvent,
				}}
				eventPropGetter={eventStyleGetter}
				onDoubleClickEvent={onDoubleClick}
				onSelectEvent={onSelect}
				onView={onViewChanged}
			/>
			<CalendarModal />
		</>
	);
};
