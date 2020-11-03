import React from "react"

function ToDoList (props) {
    const { details } = props
    console.log(details)

    return (
        <div className="todolist-container" >
            <p>{details.item}</p>
        </div>
    )
}

export default ToDoList;