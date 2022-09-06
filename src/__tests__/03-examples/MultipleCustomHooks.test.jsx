const {
  render,
  screen,
  fireEvent,
  renderHook,
} = require('@testing-library/react')
const {
  MultipleCustomHooks,
} = require('../../components/03-examples/MultipleCustomHooks')
const { useCounter } = require('../../hooks/useCounter')
const { useFetch } = require('../../hooks/useFetch')

jest.mock('../../hooks/useFetch')
jest.mock('../../hooks/useCounter')

describe('Testing MultipleCustomHooks', () => {
  const mockIncrement = jest.fn()

  // useCounter.mockReturnValue({
  //   counter: 1,
  //   increment: mockIncrement,
  // })

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should to show default component', () => {
    useCounter.mockReturnValue({
      counter: 1,
      increment: mockIncrement,
    })

    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    })

    render(<MultipleCustomHooks />)
    // screen.debug()

    expect(screen.getByText('Loading...'))
    expect(screen.getByText('BreakingBad Quotes!!!!'))

    const newButton = screen.getByRole('button', { name: 'Next quote' })
    expect(newButton.disabled).toBeTruthy()
  })

  test('should to show a Quote', () => {
    useCounter.mockReturnValue({
      counter: 1,
      increment: mockIncrement,
    })

    useFetch.mockReturnValue({
      data: [{ author: 'Christopher', quote: 'Hello World' }],
      loading: false,
      error: null,
    })
    render(<MultipleCustomHooks />)
    expect(screen.getByText('Hello World')).toBeTruthy()
    expect(screen.getByText('Christopher')).toBeTruthy()

    const newButton = screen.getByRole('button', { name: 'Next quote' })
    expect(newButton.disabled).toBeFalsy()
    // screen.debug()
  })

  test('should to call increment function', () => {
    useCounter.mockReturnValue({
      counter: 1,
      increment: mockIncrement,
    })

    useFetch.mockReturnValue({
      data: [{ author: 'Christopher', quote: 'Hello World' }],
      loading: false,
      error: null,
    })

    render(<MultipleCustomHooks />)

    const newButton = screen.getByRole('button', { name: 'Next quote' })
    fireEvent.click(newButton)

    expect(mockIncrement).toHaveBeenCalled()
  })
})
