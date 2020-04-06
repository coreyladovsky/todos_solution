import React from 'react';
import TodoList from './TodoList'
import TodoForm from './TodoForm';

export default () => {
    return(
        <div>
            <TodoForm />
            <TodoList />
        </div>
    )
};
