import React, { useState } from 'react';
import  { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../actions/todoActions'

export default () => {
    const [ title, setTitle ] = useState("");
    const [ body, setBody ] = useState("");
    const dispatch = useDispatch()
    const nextTodoId = useSelector(state => state.nextTodo);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({
            title, 
            body,
            id: nextTodoId,
            complete: false
        }))
    }

    return (
        <form onSubmit={handleSubmit}>
            Title: 
            <input onChange={(e) => setTitle(e.target.value) }/>
            Body: 
            <textarea onChange={(e) => setBody(e.target.value) }/>
            <button type="submit">Add Todo</button>
        </form>
    )
};

