import { ADD_TODO, TOGGLE_TODO } from '../actions/actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [action.payload, ...state] ;
        case TOGGLE_TODO: 
            return state.map(todo => {
                if(todo.id === action.payload) {
                    return { ...todo, complete: !todo.complete }
                }
                return todo;
            })
        default:
            return state;
    }
}

