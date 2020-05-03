import React, {useEffect, useContext} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoListItem from './TodoListItem';
import { fetchTodos } from '../actions/todoActions';
import { AuthContext } from '../providers/AuthProvider';


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
    const todos = useSelector((state) => Object.values(state.todos));
    const filter = useSelector((state) => state.visibilityFilter);
    const dispatch = useDispatch();
    const { token } = useContext(AuthContext);

    useEffect(() => {
        dispatch(fetchTodos(token));
    }, [])

    return (
        <ul>
            {getVisibleTodos(todos, filter).reverse().map(todo => {
                return <TodoListItem key={todo.id} todo={todo} />
            })}
        </ul>
    )
}