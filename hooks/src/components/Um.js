import React, { useState,useMemo } from 'react';

export default function Um() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    // #1 without using useMemo
    // const calculation = expensiveCalc(count);
    //expensive calculation performed on each render slower the performance

    // #2 with using useMemo
    /**
The code as it is can potentially have performance issues due to the expensive calculation performed on each render. The expensiveCalc function, which increments a number in a loop, is called directly in the component body. Since this function is called on every render, it can negatively impact the performance of the application.
Calling an expensive function directly in the component body can cause unnecessary re-computations, leading to slower rendering and decreased user experience, especially if the function performs heavy calculations or data manipulations.
To optimize the performance, you can use the useMemo hook to memoize the result of the expensive calculation. By memoizing the result, you can avoid re-computing it on every render unless the dependencies change. */
    const calculation = useMemo(() => expensiveCalc(count), [count]);

    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"])
    }
    const increment = () => {
        setCount((c) => c + 1)
    }
    return (
        <>
            <div>
                <h1>6:Hooks useMemo</h1>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>
                })}
                <button onClick={addTodo}>addTodo</button>
            </div>
            count : {count}
            <button onClick={increment}>+</button>
            <h1>{calculation}</h1>
        </>
    );
}

const expensiveCalc = (num) => {
    console.log("calculating");
    for (let i = 0; i <= 10000; i++) {
        num += 1;
    }
    return num;
}
