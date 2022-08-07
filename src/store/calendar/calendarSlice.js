import { createSlice } from '@reduxjs/toolkit'
import { addHours } from 'date-fns'

const tempEvents = {
  _id: new Date().getTime(),
  title: 'from slice Birthday boss',
  notes: 'Buy the cake',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Dallar',
  },
}

const newEvent = (payload) => {
  const { _id, title, notes, start, end, bgColor, user } = payload
  return {
    _id,
    title,
    notes,
    start,
    end,
    bgColor,
    user: {
      _id: user._id,
      name: user.name,
    },
  }
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    events: [tempEvents],
    activeEvent: null,
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = newEvent(payload)
    },
    onAddNewEvent: (state, { payload }) => {
      console.log({ payload })
      state.events.push(newEvent(payload)) // Si es bien visto hacer push aquí
      state.activeEvent = null
      // state.events = [...state.events, newEvent(payload)]
    },
  },
})

export const { onSetActiveEvent, onAddNewEvent } = calendarSlice.actions
