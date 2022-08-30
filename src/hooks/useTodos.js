import { useEffect, useReducer } from 'react'
import { todoReducer } from '../components/08-useReducer/todoReducer'

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init)

  const handleDelete = (todoId) => {
    const action = {
      type: 'delete',
      payload: todoId,
    }

    dispatch(action)
  }

  const handleToggle = (todoId) => {
    dispatch({
      type: 'toggle',
      payload: todoId,
    })
  }

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo,
    })
  }

  const todosCount = todos.length

  const pendingTodosCount = todos.filter((todo) => !todo.done).length

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return {
    todos,
    todosCount,
    pendingTodosCount,
    handleDelete,
    handleToggle,
    handleAddTodo,
  }
}
