import {
  ADD_TODO,
  TOGGLE_TODO,
  RECEIVE_ALL_TODOS,
} from "../actions/actionTypes";

export default (state = {}, action) => {
    const newState = {...state};
    switch (action.type) {
        case ADD_TODO:
             newState[action.payload.id] = action.payload ;
             return newState;
        case TOGGLE_TODO: 
            let todo = {...newState[action.payload]}
            todo['complete'] = !todo['complete']
            newState[action.payload] = todo;
            return newState
        case RECEIVE_ALL_TODOS: 
            return action.payload.reduce((obj, todo) => {
                obj[todo.id] = todo;
                return obj
            }, {})
        default:
            return state;
    }
}

