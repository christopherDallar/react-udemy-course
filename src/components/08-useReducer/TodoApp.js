import React, { useEffect } from 'react'

import { TodoList } from './atomic/TodoList'
import { TodoAdd } from './atomic/TodoAdd'
import { useTodo } from '../../hooks/useTodo'

// const initialState = [
// 	{
// 		id: new Date().getTime(),
// 		desc: 'Learn React',
// 		done: false,
// 	},
// ];

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {
  const { todos, handleDelete, handleToggle, handleAddTodo } = useTodo(init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className="todoApp">
      <h1>TodoApp ( {todos.length} )</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>

        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  )
}
