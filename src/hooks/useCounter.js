import { useState } from 'react'

export const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState)

  // const increment = (factor = 1) => {
  // 	setCounter(counter + factor);
  // };

  const increment = (value = 1) => {
    setCounter((current) => current + value)
  }

  const decrement = (factor = 1) => {
    setCounter(counter - factor)
  }

  const reset = () => {
    setCounter(initialState)
  }

  return {
    counter,
    increment,
    decrement,
    reset,
  }
}
