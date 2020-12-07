import { SET_NEW_INPUT, ADD_TODO, TOGGLE_TODO, CLEAR_TODO } from "../actions"

export const initialState = {
    todos: [
        {
            name: "Finish Todo project",
            completed: false,
            id: Math.round(Math.random() * 10000)
        }
    ],
    input: ""
}

export const reducer = (state, action) => {
    switch(action.type) {
        case(SET_NEW_INPUT):
            return({...state, input: action.payload})
        case(ADD_TODO):
            return ({...state, todos: [...state.todos, {name: action.payload, completed: false, id: Math.round(Math.random() * 10000)}]})
        case(TOGGLE_TODO):
            const newState = state.todos.map(item => {
                if (item.id === action.payload) {
                    return ({...item, completed: !item.completed})
                } else {
                    return item
                }
            })
            return ({...state, todos: newState})
        case(CLEAR_TODO):
            return ({...state, todos: state.todos.filter(item => (!item.completed))})
        default:
            return state;
    }
}
