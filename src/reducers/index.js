import { combineReducers } from 'redux';
import todos from './todoReducer';
import nextTodo from './nextTodoReducer';

export default combineReducers({
    todos,
    nextTodo
})
