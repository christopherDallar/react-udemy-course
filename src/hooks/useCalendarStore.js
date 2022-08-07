import { useDispatch, useSelector } from 'react-redux'
import {
  onAddNewEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from '../store/'

export const useCalendarStore = () => {
  const dispatch = useDispatch()
  const { events, activeEvent } = useSelector((state) => state.calendar)

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent))
  }

  const startSavingEvent = async (calendarEvent) => {
    // TODO: get from Backend

    // Todo if all ok

    if (calendarEvent._id) {
      console.log('calendarEvent', { calendarEvent })
      dispatch(onUpdateEvent(calendarEvent))
      // Updating
    } else {
      // Creating
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }))
    }
  }

  const deleteEvent = async () => {
    dispatch(onDeleteEvent())
  }

  return {
    //* Properties
    events,
    activeEvent,

    //* Methods
    setActiveEvent,
    startSavingEvent,
    deleteEvent,
  }
}
