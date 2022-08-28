const { render, screen } = require('@testing-library/react')
const { GifGrid } = require('../shared/components/gif/GifGrid.component')

describe('Testing <GrifGrid />', () => {
  const category = 'One Punch'

  test('should show loading on init', () => {
    render(<GifGrid category={category} />)

    expect(screen.getByText('Loading'))
    expect(screen.getByText(category))
  })

  test('should show items when load images whe use useFetchGifs', () => {})
})
