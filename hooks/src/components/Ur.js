import React, { useState, useEffect, useRef } from 'react';

export default function Ur() {

    // const [count, setCount] = useState('');
    const [name, setName] = useState('');
    // const [renderCount, setrenderCount] = useState(0);

    // #1
    // const renderCount = useRef(0);
    // {current : 0}

    // #2
    // const inputRef = useRef()
    // #3
    const prevName = useRef('')

    useEffect(() => {
        // #1
        // setrenderCount(prevRenderCount => prevRenderCount + 1)
        // #2
        // renderCount.current = renderCount.current + 1;
        // #3
        prevName.current = name;
    }, [name]);

    // function focus() {
    //     inputRef.current.focus()
    // }

    return (
        <div>
            <h1>4: hooks useRef</h1>
            <input value={name} onChange={e => setName(e.target.value)} />
            <br />
            <h1>my name is {name} and it is used to be {prevName.current}</h1>
            {/* <h1>i rendered {renderCount.current}</h1> */}
            {/* <button onClick={focus}>focus</button> */}
        </div>
    );
}
