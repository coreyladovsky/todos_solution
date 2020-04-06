import React from 'react';
import { useSelector } from 'react-redux';
import TodoListItem from './TodoListItem';

export default () => {
    const todos = useSelector((state) => state.todos);
    return (
        <ul>
            {todos.map(todo => {
                return <TodoListItem key={todo.id} todo={todo} />
            })}
        </ul>
    )
}