import { createSlice } from '@reduxjs/toolkit'
import { addHours } from 'date-fns'

const tempEvents = {
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

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    events: [tempEvents],
    activeEvents: null,
  },
  reducers: {
    increment: (state /* action */) => {
      state.counter += 1
    },
  },
})

export const { increment } = calendarSlice.actions
