import { fireEvent, render, screen } from '@testing-library/react'

import { LoginScreen } from '../../components/09-useContext/LoginScreen'
import { UserContext } from '../../components/09-useContext/UserContext'

describe('Testing <LoginScreen />', () => {
  // test('should to show component without user', () => {})

  test('should to trigger button onClick calling setUser', () => {
    const setUserMock = jest.fn()
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginScreen />
      </UserContext.Provider>,
    )
    const button = screen.getByRole('button')

    fireEvent.click(button)

    expect(setUserMock).toHaveBeenCalledWith({
      email: 'christopher@gmail.com',
      id: 123,
      name: 'christopher',
    })
  })
})
