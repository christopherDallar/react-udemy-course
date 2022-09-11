import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { SearchScreen } from '../../../components/search/SearchScreen'

describe('Testing <SearchScreen />', () => {
  test('should to match with snapshot, with ', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchScreen />
      </MemoryRouter>,
    )

    expect(container).toMatchSnapshot()
  })

  test('should to show batman and input with queryString Value ', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchScreen />
      </MemoryRouter>,
    )

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('batman')

    const img = screen.getByRole('img')
    expect(img.src).toContain('/src/assets/heroes/dc-batman.jpg')

    screen.debug()
  })
})
