import React, { useState, useContext} from 'react';
import  { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../actions/todoActions'
import { AuthContext } from '../providers/AuthProvider';

export default () => {
    const [ title, setTitle ] = useState("");
    const [ body, setBody ] = useState("");
    const dispatch = useDispatch()
    const nextTodoId = useSelector(state => state.nextTodo);
    const { token } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({
            title, 
            body
        }, token))
        setTitle("");
        setBody("")
    }

    return (
        <form onSubmit={handleSubmit}>
            Title: 
            <input onChange={(e) => setTitle(e.target.value) } value={title} required/>
            Body: 
            <textarea onChange={(e) => setBody(e.target.value) } value={body} required/>
            <button type="submit">Add Todo</button>
        </form>
    )
};

