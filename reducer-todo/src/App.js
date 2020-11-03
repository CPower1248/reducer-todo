import React, { useReducer } from "react"
import './App.css';
import { reducer, initialState } from "./reducers/reducer"
import ToDoList from "./components/ToDoList"

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <h1>-Reducer ToDo-</h1>
      <h3>ToDo List</h3>
        {state.tasks.map(item => {
          return <ToDoList key={item.id} details={item} />
        })}
    </div>
  );
}

export default App;
