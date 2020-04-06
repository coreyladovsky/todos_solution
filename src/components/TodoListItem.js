import React from 'react';

export default ({todo}) => {
    return(
        <li>
            <h3>{todo.title}</h3>
            <p>{todo.body}</p>
        </li>
    )
}