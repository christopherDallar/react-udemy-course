import { todoReducer } from '../../components/08-useReducer/todoReducer'

describe('Testing todoReducer', () => {
  const initialState = [
    {
      id: 1,
      description: 'Demo Todo',
      done: false,
    },
  ]

  test('should to return initial state', () => {
    const newState = todoReducer(initialState, {})
    expect(newState).toBe(initialState)
  })

  test('should to add todo', () => {
    const action = {
      type: 'add',
      payload: {
        id: 2,
        description: 'Demo Todo 2',
        done: false,
      },
    }

    const newState = todoReducer(initialState, action)
    expect(newState.length).toBe(2)
    expect(newState).toContain(action.payload) // toEqual but like includes to array
  })

  test('should to delete todo', () => {
    const action = {
      type: 'delete',
      payload: 1,
    }

    const newState = todoReducer(initialState, action)
    expect(newState.length).toBe(0)
  })

  test('should to Toggle between done and todo', () => {
    const action = {
      type: 'toggle',
      payload: 1,
    }

    let newState = todoReducer(initialState, action)
    expect(newState[0].done).toBeTruthy()

    newState = todoReducer(initialState, action)
    expect(newState[0].done).toBeFalsy()
  })
})
