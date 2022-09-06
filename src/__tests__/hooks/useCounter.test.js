import { useCounter } from '../../hooks/useCounter'
import { act, renderHook } from '@testing-library/react'

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

  test('should to return counter incremented', () => {
    const { result } = renderHook(() => useCounter())
    const { increment } = result.current
    act(() => {
      increment()
      increment(2)
    })
    expect(result.current.counter).toBe(13)
  })

  test('should to return counter decremented', () => {
    const { result } = renderHook(() => useCounter())
    const { decrement } = result.current
    act(() => {
      decrement()
      decrement(2)
    })
    expect(result.current.counter).toBe(8)
  })

  test('should to return counter reseated', () => {
    const { result } = renderHook(() => useCounter())
    const { reset, decrement } = result.current
    act(() => {
      decrement(2)
      reset()
    })
    expect(result.current.counter).toBe(10)
  })
})
