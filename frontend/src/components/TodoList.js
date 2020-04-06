import React from 'react';
import { useSelector } from 'react-redux';
import TodoListItem from './TodoListItem';


const getVisibleTodos = (todos, filter) => {
    if(filter === "all") return todos;
    if(filter === "complete") {
        return todos.filter(todo => todo.complete)
    }
    if(filter === "active") {
        return todos.filter(todo => !todo.complete)
    }
}

export default () => {
    const todos = useSelector((state) => state.todos);
    const filter = useSelector((state) => state.visibilityFilter);

    return (
        <ul>
            {getVisibleTodos(todos, filter).map(todo => {
                return <TodoListItem key={todo.id} todo={todo} />
            })}
        </ul>
    )
}