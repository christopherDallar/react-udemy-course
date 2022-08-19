import { createSlice } from '@reduxjs/toolkit';

const newEvent = (payload) => {
  const { id, title, notes, start, end, bgColor, user } = payload;
  return {
    id,
    title,
    notes,
    start,
    end,
    bgColor: '',
    user: {
      uid: user._id,
      name: user.name,
    },
  };
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    events: [],
    activeEvent: null,
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = newEvent(payload);
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push(newEvent(payload)); // Si es bien visto hacer push aquí
      state.activeEvent = null;
      // state.events = [...state.events, newEvent(payload)]
    },
    onUpdateEvent: (state, { payload }) => {
      state.events = state.events.map((event) => {
        if (event.id === payload.id) {
          return payload;
        }
        return event;
      });
      state.activeEvent = null;
    },
    onDeleteEvent: (state) => {
      state.events = state.events.filter(
        (event) => event.id !== state.activeEvent.id
      );
      state.activeEvent = null;
    },
    onSetEvents: (state, { payload = [] }) => {
      console.log({ payload });
      console.log('objects');
      console.log(payload.map((event) => newEvent(event)));
      state.events = payload;
    },
  },
});

export const {
  onSetActiveEvent,
  onAddNewEvent,
  onUpdateEvent,
  onDeleteEvent,
  onSetEvents,
} = calendarSlice.actions;
