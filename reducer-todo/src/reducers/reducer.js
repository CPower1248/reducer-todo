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
        default:
            return state
    }
}
