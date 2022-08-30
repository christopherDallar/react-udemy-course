import React from 'react'

import { TodoList } from './atomic/TodoList'
import { TodoAdd } from './atomic/TodoAdd'
import { useTodos } from '../../hooks/useTodos'

// const initialState = [
// 	{
// 		id: new Date().getTime(),
// 		desc: 'Learn React',
// 		done: false,
// 	},
// ];

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleDelete,
    handleToggle,
    handleAddTodo,
  } = useTodos()

  return (
    <div className="todoApp">
      <h1>
        TodoApp {todosCount}
        <small> pendientes: {pendingTodosCount}</small>
      </h1>
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
