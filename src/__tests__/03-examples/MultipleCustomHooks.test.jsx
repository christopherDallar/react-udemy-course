const { render, screen } = require('@testing-library/react')
const {
  MultipleCustomHooks,
} = require('../../components/03-examples/MultipleCustomHooks')

describe('Testing MultipleCustomHooks', () => {
  test('should to show default component', () => {
    render(<MultipleCustomHooks />)
    // screen.debug()

    expect(screen.getByText('Loading...'))
    expect(screen.getByText('BreakingBad Quotes!!!!'))

    const newButton = screen.getByRole('button', { name: 'Next quote' })
    expect(newButton.disabled).toBeFalsy()
  })
})
