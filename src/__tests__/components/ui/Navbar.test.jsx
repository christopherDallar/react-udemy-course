import { useContext } from 'react'
import { MemoryRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../auth/authContext'
import { Navbar } from '../../../components/ui/Navbar'
const {
  render,
  screen,
  fireEvent,
  renderHook,
} = require('@testing-library/react')

const mockedUseNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}))

describe('Testing <Navbar />', () => {
  test('should to show user name logged', () => {
    const user = { name: 'Christopher' }

    render(
      <AuthContext.Provider value={{ user }}>
        <MemoryRouter initialEntries={['/']}>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>,
    )

    // screen.debug()

    expect(screen.getByText(user.name)).toBeTruthy()
  })

  test('should to call logout and navigate when click on button', () => {
    const user = { name: 'Christopher', logged: true }
    const dispatch = jest.fn()

    render(
      <AuthContext.Provider value={{ user, dispatch }}>
        <MemoryRouter initialEntries={['/']}>
          <Navbar />
          <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/login" element={<h1>Public route</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>,
    )

    fireEvent.click(screen.getByRole('button'))

    expect(dispatch).toHaveBeenCalled()
    expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { replace: true })
    // expect(screen.getByRole('heading').innerHTML).toBe('Public route')
  })
})
