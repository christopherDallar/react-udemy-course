export const events = [
  {
    id: '1',
    start: new Date('2022-10-21 13:00:00'),
    end: new Date('2022-10-21 15:00:00'),
    title: "Christopher's Birthday",
    notes: 'Some note written',
    bgColor: '',
    user: {
      _id: '3333331',
      name: 'Christopher',
    },
  },
  {
    id: '2',
    start: new Date('2022-11-09 13:00:00'),
    end: new Date('2022-11-09 15:00:00'),
    title: "Melissa's Birthday",
    notes: 'Some note written by Melissa',
    bgColor: '',
    user: {
      _id: '2222221',
      name: 'juan',
    },
  },
]

export const initialState = {
  isLoadingEvents: true,
  events: [],
  activeEvent: null,
}

export const calendarWithEventsState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: null,
}

export const calendarWithActiveEventState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: { ...events[0] },
}
