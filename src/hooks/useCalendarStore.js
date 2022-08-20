import { useDispatch, useSelector } from 'react-redux';
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
    if (calendarEvent._id) {
      console.log('calendarEvent', { calendarEvent });
      dispatch(onUpdateEvent(calendarEvent));
      // Updating
    } else {
      // Creating
      try {
        const { data } = await calendarApi.post('/events', calendarEvent);
        // console.log(data);
        dispatch(onAddNewEvent({ ...calendarEvent, id: data.event.id, user }));
      } catch (error) {
        console.log(error);
      }
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
