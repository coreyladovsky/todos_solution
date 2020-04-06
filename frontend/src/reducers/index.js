import { combineReducers } from 'redux';
import todos from './todoReducer';
import nextTodo from './nextTodoReducer';
import visibilityFilter from './visibilityFilterReducer';

export default combineReducers({
    todos,
    nextTodo,
    visibilityFilter
})
