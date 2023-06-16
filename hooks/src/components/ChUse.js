import React from 'react';
import ChLogic from './ChLogic';

export default function ChUse() {
    const [data] = ChLogic(`https://jsonplaceholder.typicode.com/todos`);
    return (
        <div>
            {data && data.map((ele) => {
                return <p key={ele.id}> {ele.title}</p>
            })}
        </div>
    );
}
