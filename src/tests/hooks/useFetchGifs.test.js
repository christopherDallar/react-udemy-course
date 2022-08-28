import { renderHook, waitFor } from '@testing-library/react'
import { useFetchGifs } from '../../shared/hooks/useFetchGifs'

describe('Testing hook useFetchGifs', () => {
  test('should return initial state', () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'))
    const { data, loading } = result.current

    expect(data.length).toBe(0)
    expect(loading).toBeTruthy()
  })

  test('should return images array and loading with false value', async () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'))

    // just wait until condition is true then continue with code incoming
    await waitFor(
      () => expect(result.current.data.length).toBeGreaterThan(0),
      // {
      //   timeout: 6000 // by default is 1 second to wait if doesn't happen
      // }
    )

    const { data, loading } = result.current

    expect(data.length).toBeGreaterThan(0)
    expect(loading).toBeFalsy()
  })
})
