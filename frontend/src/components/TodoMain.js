import React from 'react';
import TodoList from './TodoList'
import TodoForm from './TodoForm';
import VisibilityFilter from './VisibilityFilter';

export default () => {
    return(
        <div>
            <h1>TODO APP</h1>
            <TodoForm />
            <VisibilityFilter />
            <TodoList />
        </div>
    )
};
