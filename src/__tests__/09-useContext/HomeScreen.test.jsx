import { render, screen } from '@testing-library/react'
import { HomeScreen } from '../../components/09-useContext/HomeScreen'
import { UserContext } from '../../components/09-useContext/UserContext'

describe('Testing <HomeScreen /> component', () => {
  const user = {
    id: 1,
    name: 'Christopher',
  }

  test('should to show component without user', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomeScreen />
      </UserContext.Provider>,
    )
    // screen.debug()
    const preTag = screen.getByLabelText('pre')
    expect(preTag.innerHTML).toBe('null')
  })

  test('should to show component with user', () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomeScreen />
      </UserContext.Provider>,
    )
    // screen.debug()
    const preTag = screen.getByLabelText('pre')

    // expect(JSON.parse(preTag.innerHTML)).toEqual(user)
    expect(preTag.innerHTML).toContain(user.name)
    expect(preTag.innerHTML).toContain(`${user.id}`)
  })
})
