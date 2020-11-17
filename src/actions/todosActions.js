const todosURL = "http://localhost:3000/api/todos"

export const fetchTodos = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_TODOS'})
      return fetch(todosURL)
      .then(response => response.json())
      .then(todos => dispatch({type: 'FETCH_TODOS', payload: todos}))
    }
  }

// fetch a particular Todo by id
export const fetchTodo = id => {
  return (dispatch) => {
    dispatch({type: 'LOADING_TODOS'})
      return fetch(`${todosURL}/${id}`)
      .then(response => response.json())
      .then(todo => dispatch({type: 'FETCH_TODO', payload: todo}))
    }
  }
