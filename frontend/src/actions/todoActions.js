import axios from 'axios';
import { ADD_TODO, TOGGLE_TODO, RECEIVE_ALL_TODOS } from './actionTypes';
import { apiURL } from '../util/util';

const API = apiURL();
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

export const fetchTodos = (token) => async dispatch => {    
    try {
        let res = await axios({
            method: 'get',
            url: `${API}/todos`,
            headers: {
              'AuthToken': token
            }
        });
        dispatch(receiveAllTodos(res.data.todos))
    } catch (err) {
        console.log(err)
    }
}

export const addTodo = (todo, token) => async dispatch => {
    try {
        let res = await axios(
          {
            method: "post",
            url: `${API}/todos`,
            headers: {
                'AuthToken': token
            },
            data: todo
          }
        );
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
        let res = await axios.get(`${API}/todos/${todoId}`);
        dispatch(receiveToggleTodo(todoId))
    } catch (err) {
        console.log(err);
    }
}