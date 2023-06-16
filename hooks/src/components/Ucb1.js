import React, { memo } from 'react';

export default function Ucb1({ todos, addTodo }) {
    return (

        <>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
            <button onClick={addTodo}>Add Todo</button>
        </>

    );
}
