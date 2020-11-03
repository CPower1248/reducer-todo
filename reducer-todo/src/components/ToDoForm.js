import React from "react"

function ToDoForm (props) {
    const { change } = props

    return (
        <form className="todoform-container" >
            <label>New ToDo:
                <input type="text" name="newToDo" onChange={change} />
            </label>
            <button>submit</button>
        </form>
    )
}

export default ToDoForm;