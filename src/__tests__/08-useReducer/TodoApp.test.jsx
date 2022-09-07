import { render, screen } from '@testing-library/react'
import { TodoApp } from '../../components/08-useReducer/TodoApp'
import { useTodos } from '../../hooks/useTodos'

jest.mock('../../hooks/useTodos')

describe('Testing <TodoApp />', () => {
  // useTodos.mockReturnValue({
  //   todos: [
  //     { id: 1, description: 'Todo #1', done: false },
  //     { id: 1, description: 'Todo #2', done: true },
  //   ],
  //   todosCount: 2,
  //   pendingTodosCount: 0,
  //   handleDelete: jest.fn(),
  //   handleToggle: jest.fn(),
  //   handleAddTodo: jest.fn(),
  // })

  test('should to show component correctly', () => {
    useTodos.mockReturnValue({
      todos: [
        { id: 1, description: 'Todo #1', done: false },
        { id: 2, description: 'Todo #2', done: true },
      ],
      todosCount: 2,
      pendingTodosCount: 0,
      handleDelete: jest.fn(),
      handleToggle: jest.fn(),
      handleAddTodo: jest.fn(),
    })
    render(<TodoApp />)
    // screen.debug()

    expect(screen.getByText('TodoApp 2')).toBeTruthy()
    expect(screen.getByText('pendientes: 0')).toBeTruthy()
    expect(screen.getByRole('textbox')).toBeTruthy()
  })
})
