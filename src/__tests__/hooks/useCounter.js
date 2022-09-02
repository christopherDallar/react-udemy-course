import { useCounter } from '../../hooks/useCounter'
import { renderHook } from '@testing-library/react'

describe('Testing useCounter', () => {
  test('should to return default values', () => {
    const { counter, increment, decrement, reset } = renderHook(() =>
      useCounter(),
    ).result.current

    expect(counter).toBe(10)
    expect(increment).toEqual(expect.any(Function))
    expect(decrement).toEqual(expect.any(Function))
    expect(reset).toEqual(expect.any(Function))
  })

  test('should to return counter with 100 value', () => {
    const { counter } = renderHook(() => useCounter(100)).result.current

    expect(counter).toBe(100)
  })
})
