import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter, useNavigate } from 'react-router-dom'
import { SearchScreen } from '../../../components/search/SearchScreen'

const mockedUseNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}))

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
  })

  // test('should to show error if does not exist hero (batman123)', () => {

  //  })

  test('should call navigate to new screen', () => {
    const inputValue = 'superman'

    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchScreen />
      </MemoryRouter>,
    )

    const input = screen.getByRole('textbox')

    fireEvent.change(input, {
      target: { name: 'searchText', value: inputValue },
    })

    expect(input.value).toBe(inputValue)

    const form = screen.getByLabelText('form')
    fireEvent.submit(form)
    expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`)
  })
})
