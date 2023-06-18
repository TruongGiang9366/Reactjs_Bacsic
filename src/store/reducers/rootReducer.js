const initState ={
    users: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Alex Nguyen'}
    ]
}
const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;