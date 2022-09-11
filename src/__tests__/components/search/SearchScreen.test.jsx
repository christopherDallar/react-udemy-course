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
})
