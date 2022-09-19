import {
  calendarSlice,
  onAddNewEvent,
  onDeleteEvent,
  onLoadEvents,
  onLogoutCalendar,
  onSetActiveEvent,
  onUpdateEvent,
} from '../../../store/calendar/calendarSlice'
import {
  calendarWithActiveEventState,
  calendarWithEventsState,
  events,
  initialState,
} from '../../fixures/calendarStates'

describe('Testing calendarSlice', () => {
  test('should return initial state', () => {
    const state = calendarSlice.getInitialState()

    expect(state).toEqual(initialState)
  })

  test('should onSetActiveEvent have to activate event', () => {
    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onSetActiveEvent(events[0]),
    )

    const eventFormatted = {
      ...events[0],
      user: {
        uid: events[0].user._id,
        name: 'Christopher',
      },
    }

    expect(state.activeEvent).toEqual(eventFormatted)
    // expect(state).toEqual(initialState)
  })

  test('should onAddNewEvent have to add event', () => {
    const newEvent = {
      id: '3',
      start: new Date('2020-10-21 13:00:00'),
      end: new Date('2020-10-21 15:00:00'),
      title: "Christopher's Birthday 2!!",
      notes: 'Some note written 2!!',
      bgColor: '',
      user: {
        _id: '3333331',
        name: 'Christopher',
      },
    }

    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onAddNewEvent(newEvent),
    )

    const eventFormatted = {
      ...newEvent,
      user: {
        uid: newEvent.user._id,
        name: 'Christopher',
      },
    }

    // console.log(state)
    expect(state.events).toEqual([...events, eventFormatted])
  })

  test('should onUpdateEvent have to update event', () => {
    const updateEvent = {
      id: '1',
      start: new Date('2021-10-21 13:00:00'),
      end: new Date('2021-10-21 15:00:00'),
      title: "Christopher's Birthday 2 modificado!!",
      notes: 'Some note written modificado!!',
      bgColor: '',
      user: {
        _id: '3333331',
        name: 'Christopher',
      },
    }

    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onUpdateEvent(updateEvent),
    )

    const eventsFormatted = state.events.map((event) => {
      if (event.id === updateEvent.user._id) {
        return {
          ...event,
          user: {
            ...event.user,
            uid: updateEvent.user._id,
          },
        }
      }

      return event
    })

    expect(state.events).toEqual(eventsFormatted)
  })

  test('should onDeleteEvent have to remove event', () => {
    const state = calendarSlice.reducer(
      calendarWithActiveEventState,
      onDeleteEvent(),
    )

    expect(state.activeEvent).toBe(null)
    expect(state.events).not.toContain(events[0])
  })

  test('should onLoadEvents have to remove event', () => {
    const state = calendarSlice.reducer(initialState, onLoadEvents(events))

    expect(state.isLoadingEvents).toBeFalsy()
    expect(state.events).toEqual(events)

    const newState = calendarSlice.reducer(state, onLoadEvents(events))
    expect(newState.events.length).toBe(events.length)
  })

  test('should onLogoutCalendar have to be initial state', () => {
    const state = calendarSlice.reducer(
      calendarWithActiveEventState,
      onLogoutCalendar(),
    )

    expect(state).toEqual(initialState)
  })
})
