import { renderHook } from '@testing-library/react'
import { useTodos } from '../../hooks/useTodos'
import { todoReducer } from '../../components/08-useReducer/todoReducer'
import { useReducer } from 'react'

describe('Testing useTodos', () => {
  test('should to return default values', () => {
    const { result: resultReducer } = renderHook(() =>
      useReducer(todoReducer, [], () => []),
    )

    const { result } = renderHook(() => useTodos())

    const {
      todos,
      todosCount,
      pendingTodosCount,
      handleDelete,
      handleToggle,
      handleAddTodo,
    } = result.current
    expect(todos.length).toBe(0)
    expect(todosCount).toBe(0)
    expect(pendingTodosCount).toBe(0)

    expect(typeof handleDelete).toBe('function')
    expect(typeof handleToggle).toBe('function')
    expect(typeof handleAddTodo).toBe('function')
  })

  test('should to add todo', () => {
    const { result: resultReducer } = renderHook(() =>
      useReducer(todoReducer, [], () => [
        {
          id: 1,
          description: 'Demo Todo',
          done: false,
        },
      ]),
    )

    const { result } = renderHook(() => useTodos())

    console.log(result.current)
    // const {
    //   todos,
    //   todosCount,
    //   pendingTodosCount,
    //   handleDelete,
    //   handleToggle,
    //   handleAddTodo,
    // } = result.current
  })
})

// todos: [],
// todosCount: 0,
// pendingTodosCount: 0,
// handleDelete: jest.fn(),
// handleToggle: jest.fn(),
// handleAddTodo: jest.fn(),
