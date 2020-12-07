import React, { useReducer } from "react"
import './App.css';
import { initialState, reducer } from "./reducers"
import { setNewInput, addTodo, toggleTodo, clearTodo } from "./actions"

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)

  const handleChange = e => {
    dispatch(setNewInput(e.target.value))
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addTodo(state.input))
    state.input = initialState.input
  }

  const handleToggle = itemId => {
    dispatch(toggleTodo(itemId))
  }

  const handleClear = () => {
    dispatch(clearTodo())
  }

  return (
    <div className="App">
      <h1>-Reducer Todo-</h1>
      <h3>Todo Form</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="newTodo" value={state.input} onChange={handleChange} placeholder="New Todo" />
        <button>submit</button>
      </form>
      <button onClick={handleClear}>clear</button>
      
      <h3>Todo List</h3>
      {state.todos.map(item => {
        return (
          <div onClick={() => handleToggle(item.id)} className={`todo${item.completed ? " completed" : ''}`}>
            <p>{item.name}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
