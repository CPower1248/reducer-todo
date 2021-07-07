import { SET_NEW_TODO } from "../actions/action"

export let initialState = {
    tasks: [
        {
            item: "Learn about reducers",
            completed: false,
            id: Math.round(Math.random() * 100)
        }
    ]
}

export const reducer = (state, action) => {
    switch(action.type) {
        case(SET_NEW_TODO):
            const newToDo = {...state, item: action.payload}
            return newToDo
        default:
            return state
    }
}
