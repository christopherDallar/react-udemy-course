import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AppRouter } from '../../components/09-useContext/AppRouter'
import { UserContext } from '../../components/09-useContext/UserContext'

describe('Testing <AppRouter />', () => {
  test('should to show HomeScreen', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <MemoryRouter>
          <AppRouter />
        </MemoryRouter>
      </UserContext.Provider>,
    )

    // screen.debug()

    expect(screen.getByText('HomeScreen')).toBeTruthy()
  })

  test('should to show LoginScreen', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <MemoryRouter initialEntries={['/login']}>
          <AppRouter />
        </MemoryRouter>
      </UserContext.Provider>,
    )

    screen.debug()
    const navTag = screen.getByRole('navigation')

    expect(screen.getByText('LoginScreen')).toBeTruthy()

    expect(navTag.getElementsByClassName('nav-link active').length).toBe(1)
    expect(
      navTag.getElementsByClassName('nav-link active')[0].innerHTML,
    ).toContain('Login')
  })
})
