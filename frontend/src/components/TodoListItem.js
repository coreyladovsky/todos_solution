import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../actions/todoActions';
import "../css/TodoListItem.css";

export default ({todo}) => {
    const dispatch = useDispatch();
    return(
        <li onClick={() => dispatch(toggleTodo(todo.id))} className={todo.complete ? "complete" : "unfinished"}>
            <h3>{todo.title}</h3>
            <p>{todo.body}</p>
        </li>
    )
}