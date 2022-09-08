import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { heroesImgs } from '../../helpers/heroImgs'
import { PrivateRoute } from '../../routers/PrivateRoute'

jest.mock('../../helpers/heroImgs')

describe('Testing <PrivateRoute />', () => {
  test('should to show children if user not authenticated', () => {
    const user = { logged: true }

    // heroesImgs.mockReturnValue(jest.fn())

    render(
      <AuthContext.Provider value={{ user }}>
        <MemoryRouter>
          <PrivateRoute>
            <h1>Private route</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>,
    )

    // screen.debug()

    expect(screen.getByText('Private route')).toBeTruthy()
  })
})
