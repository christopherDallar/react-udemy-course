const { render, screen } = require('@testing-library/react')
const { ViewGiftExpert } = require('../views/GiftExpert.view')

describe('Testing <ViewGiftExpert />', () => {
  test('should math with snapshot', () => {
    const { container } = render(<ViewGiftExpert />)
    expect(container).toMatchSnapshot()
  })

  test('should show title h1 tag GiftExpertApp', () => {
    const { container } = render(<ViewGiftExpert />)

    const h1 = container.querySelector('h1')

    expect(h1.innerHTML).toBe('GiftExpertApp')
  })
})
