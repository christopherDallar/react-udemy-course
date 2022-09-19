import { configureStore } from '@reduxjs/toolkit'
import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { FabDelete } from '../../../calendar/components/FabDelete'
import { store } from '../../../store'

const mockStartDeletingEvent = jest.fn()

jest.mock('../../../hooks/useCalendarStore', () => ({
  ...jest.requireActual('../../../hooks/useCalendarStore'),
  useCalendarStore: () => ({
    startDeletingEvent: mockStartDeletingEvent,
  }),
}))

describe('Testing FabDelete', () => {
  test('should show render well', () => {
    render(
      <Provider store={store}>
        <FabDelete />
      </Provider>,
    )

    const btn = screen.getByRole('button')
    fireEvent.click(btn)

    expect(mockStartDeletingEvent).toHaveBeenCalled()
  })
})
