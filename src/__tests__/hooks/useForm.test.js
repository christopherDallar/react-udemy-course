const { renderHook } = require('@testing-library/react')
const { act } = require('react-dom/test-utils')
const { useForm } = require('../../hooks/useForm')

describe('Testing UseForm', () => {
  const initialForm = {
    name: 'Christopher',
    email: 'christopher@gmail.com',
  }

  test('should to return default values', () => {
    const { result } = renderHook(() => useForm(initialForm))
    // console.log(result.current)
    // expect(result.current).toEqual([
    //   { name: initialForm.name, email: initialForm.email },
    //   handleInputChange: expect.any(Function),
    //   reset: expect.any(Function)
    // ])

    const [values, handleInputChange, reset] = result.current

    expect(values).toEqual(initialForm)
    expect(typeof handleInputChange).toBe('function')
    expect(typeof reset).toBe('function')
  })

  test('should to change name field on form', () => {
    const newName = 'Juan'
    const { result } = renderHook(() => useForm(initialForm))
    const [, handleInputChange] = result.current
    act(() => {
      handleInputChange({
        target: { name: 'name', value: newName },
      })
    })

    expect(result.current[0].name).toEqual(newName)
  })

  test('should to reset name field on form', () => {
    const { result } = renderHook(() => useForm(initialForm))
    const [, handleInputChange, reset] = result.current

    const newName = 'Juan'
    act(() => {
      handleInputChange({
        target: { name: 'name', value: newName },
      })
      reset()
    })

    expect(result.current[0].name).toEqual(initialForm.name)
  })
})
