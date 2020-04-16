import axios from 'axios';
import { ADD_TODO, TOGGLE_TODO, RECEIVE_ALL_TODOS } from './actionTypes';

const receiveTodo = (todo) => {
    return {
        type: ADD_TODO, 
        payload: todo
    }
}

const receiveAllTodos = todos => {
    return {
        type: RECEIVE_ALL_TODOS, 
        payload: todos
    }
}

export const fetchTodos = () => async dispatch => {
    try {
        let res = await axios.get("/todos");
        dispatch(receiveAllTodos(res.data.todos))
    } catch (err) {
        console.log(err)
    }
}

export const addTodo = (todo) => async dispatch => {
    try {
        let res = await axios.post("/todos", todo);
        dispatch(receiveTodo(res.data.todo))
    } catch (err) {
        console.log(err)
    }
}



 const receiveToggleTodo = (todoId) => {
    return {
        type: TOGGLE_TODO, 
        payload: todoId
    }
}

export const toggleTodo = (todoId) => async dispatch => {
    try {
        let res = await axios.get(`/todos/${todoId}`);
        dispatch(receiveToggleTodo(todoId))
    } catch (err) {
        console.log(err);
    }
}