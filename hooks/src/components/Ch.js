import React, { useState, useEffect } from 'react';

export default function Ch() {
    const [data, setdata] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((res) => res.json())
            .then((data) => setdata(data))
    }, []);
    return (
        <div>
            <h1>7:Hooks Custom Hooks</h1>
            {data && data.map((ele) => {
                return <p key={ele.id}> {ele.title}</p>
            })}
        </div>
    );
}
