import React, { useState, useCallback } from 'react';
import Ucb1 from "./Ucb1"

export default function Ucb() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const increment = () => {
        setCount((c) => c + 1);
    };
     
    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"])
        console.log("button clicked");
    }, [todos])
    return (
        <div>
            <>
                <Ucb1 todos={todos} addTodo={addTodo} />
                <hr />
                <div>
                    Count: {count}
                    <button onClick={increment}>+</button>
                </div>
            </>
        </div>
    );
}
