import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import calendarApi from '../api/calendarApi';
import { convertEventsToDateEvents } from '../helpers';
import {
  onAddNewEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onLoadEvents,
  onUpdateEvent,
} from '../store/';

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { user } = useSelector((state) => state.auth);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    try {
      if (calendarEvent.id) {
        await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent);
        dispatch(onUpdateEvent(calendarEvent));

        return;
        // Updating
      }

      const { data } = await calendarApi.post('/events', calendarEvent);

      dispatch(onAddNewEvent({ ...calendarEvent, id: data.event.id, user }));
    } catch (error) {
      console.log(error);

      Swal.fire('Error on saving', error.response.data.mgs, 'error');
    }
  };

  const deleteEvent = async () => {
    dispatch(onDeleteEvent());
  };

  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get('/events');
      const events = convertEventsToDateEvents(data.events);
      console.log('startLoadingEvents', events);

      dispatch(onLoadEvents(events));
    } catch (error) {
      console.log('Error loading events', error);
    }
  };

  return {
    //* Properties
    events,
    activeEvent,

    //* Methods
    setActiveEvent,
    startSavingEvent,
    deleteEvent,
    startLoadingEvents,
  };
};
