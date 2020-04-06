import React from 'react';
import { useDispatch } from 'react-redux';
import { setVisibilityFilter } from "../actions/visibilityActions";

export default () => {
    const dispatch = useDispatch();

    const setFilter = (filter) => {
        dispatch(setVisibilityFilter(filter));
    }

    return (

    <div>
        <button onClick={e => setFilter("complete")}>Completed</button>
        <button onClick={e => setFilter("active")}>Active</button>
        <button onClick={e => setFilter("all")}>All</button>
    </div>
        )
};
