import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { heroesImgs } from '../../helpers/heroImgs'
import { PrivateRoute } from '../../routers/PrivateRoute'

jest.mock('../../helpers/heroImgs')

describe('Testing <PrivateRoute />', () => {
  test('should to show children if user not authenticated', () => {
    const user = { logged: false }

    // heroesImgs.mockReturnValue(jest.fn())

    render(
      <AuthContext.Provider value={{ user }}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/login" element={<h1>Public route</h1>} />
            <Route
              path="/*"
              element={
                <PrivateRoute>
                  <Routes>
                    <Route path="/" element={<h1>Private route</h1>} />
                  </Routes>
                </PrivateRoute>
              }
            />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>,
    )

    // screen.debug()

    expect(screen.getByText('Public route')).toBeTruthy()
  })

  test('should to show children if user is authenticated', () => {
    const user = { logged: true }

    // heroesImgs.mockReturnValue(jest.fn())

    render(
      <AuthContext.Provider value={{ user }}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/login" element={<h1>Public route</h1>} />
            <Route
              path="/*"
              element={
                <PrivateRoute>
                  <Routes>
                    <Route path="/" element={<h1>Private route</h1>} />
                  </Routes>
                </PrivateRoute>
              }
            />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>,
    )

    // screen.debug()

    expect(screen.getByText('Private route')).toBeTruthy()
  })
})
