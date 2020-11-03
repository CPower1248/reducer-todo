import React, { useReducer } from "react"
import './App.css';
import { reducer, initialState } from "./reducers/reducer"
import { setNewToDo } from "./actions/action"
import ToDoList from "./components/ToDoList"
import ToDoForm from "./components/ToDoForm"

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState)

  const handleChanges = e => {
    dispatch(setNewToDo(e.target.value))
  }

  return (
    <div className="App">
      <h1>-Reducer ToDo-</h1>
      <h3>ToDo List</h3>
        {state.tasks.map(item => {
          return <ToDoList key={item.id} details={item} />
        })}
      <h3>ToDo Form</h3>
        <ToDoForm state={state} change={handleChanges} />
    </div>
  );
}

export default App;
