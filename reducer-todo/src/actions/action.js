export const SET_NEW_TODO = "SET_NEW_TODO"

export const setNewToDo = (newToDo) => {
    return ({type: SET_NEW_TODO, payload: newToDo})
}