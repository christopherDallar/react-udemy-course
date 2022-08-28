const { render, screen } = require('@testing-library/react')
const { GifGrid } = require('../shared/components/gif/GifGrid.component')
const { useFetchGifs } = require('../shared/hooks/useFetchGifs')

jest.mock('../shared/hooks/useFetchGifs')

describe('Testing <GrifGrid />', () => {
  const category = 'One Punch'

  test('should show loading on init', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    })

    render(<GifGrid category={category} />)

    expect(screen.getByText('Loading'))
    expect(screen.getByText(category))
  })

  test('should show items when load images useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'https://localhost/saitama.jpg',
      },
      {
        id: '123',
        title: 'Goku',
        url: 'https://localhost/goku.jpg',
      },
    ]

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    })
    render(<GifGrid category={category} />)

    expect(screen.getAllByRole('img').length).toBe(2)
  })
})
