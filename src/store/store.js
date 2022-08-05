import { configureStore } from '@reduxjs/toolkit'
// import { uiSlice } from './ui/uiSlice'
// import { calendarSlice } from './calendar/calendarSlice'
import { uiSlice, calendarSlice } from './'

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    calendar: calendarSlice.reducer,
  },
})
