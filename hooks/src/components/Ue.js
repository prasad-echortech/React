import React from 'react';
import { useState, useEffect } from "react";

export default function Ue() {
    const [data, setdata] = useState([]);
    const [count, setcount] = useState(0);
    const [calculation, setcalculation] = useState(0);

    // #1

    // useEffect(() => {
    //   setTimeout(() => {
    //     setcount((count) => count + 1)
    //   }, 1000);
    // }, []);

    // #2

    // useEffect(() => {
    //     setcalculation(() => count * 5);
    // }, [count]);

    // #3

    useEffect(() => {
        let timer = setTimeout(() => {
            setcount((count) => count + 1)
        }, 1000);

        return () => clearTimeout(timer)
    }, []);

    // #4

    useEffect(() => {
        // Fetch data from an API
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(console.log)
        //   .then(data => {
        //    setdata(data)

    }, []);

    // Extract the firstName from each user and store them in an array
    return (
        <div>
            <h1>2: hooks UseEffect</h1>
            {/* #1 */}
            {/* <p>I've rendered {count} times!</p> */}
            {/* #2 */}
            {/* <p> count : {count}</p>
      <button onClick={() => setcount((e) => e + 1)}>+</button>
      <p>calulation : {calculation}</p> */}
            {/* #3 */}
            <p>I've rendered {count} times!</p>
            {/* #4 */}
            {/* <ul>
                {data.map((e) => (
                    <li key={e.firstName}>{e.firstName}</li>
                ))}
            </ul> */}
        </div>
    );
}
