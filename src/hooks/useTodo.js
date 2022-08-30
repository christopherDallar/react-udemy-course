import { useReducer } from 'react'
import { todoReducer } from '../components/08-useReducer/todoReducer'

export const useTodo = (initialState = []) => {
  const [todos, dispatch] = useReducer(todoReducer, [], initialState)

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

  return {
    todos,
    handleDelete,
    handleToggle,
    handleAddTodo,
  }
}
