export const SET_NEW_INPUT = "SET_NEW_INPUT"
export const ADD_TODO = "ADD_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"
export const CLEAR_TODO = "CLEAR_TODO"

export const setNewInput = newInput => {
    return ({type: SET_NEW_INPUT, payload: newInput})
}
export const addTodo = newTodo => {
    return ({type: ADD_TODO, payload: newTodo})
}
export const toggleTodo = itemId => {
    return ({type: TOGGLE_TODO, payload: itemId})
}
export const clearTodo = () => {
    return ({type: CLEAR_TODO})
}
