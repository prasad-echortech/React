import React, { useState, useRef, useEffect } from 'react';

export default function Radio() {
    const [inputs, setinputs] = useState({});

    const previousInputValue = useRef({});

    useEffect(() => {
        previousInputValue.current = inputs;
    }, [inputs]);

    const handleChange = (event => {
        const name = event.target.name;
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setinputs(values => ({ ...values, [name]: value }))
    })

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(' http://localhost:3000/formdata', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(previousInputValue.current)
        })
        alert("Done 👍👍")
    }
    return (
        <div className='row d-flex justify-content-center mt-5'>
            <div className='col-5'>
                <h1>Radio Box</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label>Radio-Button Name</label>
                        <input type="text" className="form-control" id="" name="radioname" value={inputs.radioname || ""} onChange={handleChange} />
                    </div>

                    <div><input type='checkBox' name="isRequired" value={inputs.isRequired || false} onChange={handleChange} />Default Checked</div>
                    <button type="submit" className="btn btn-success">Done</button>
 
                </form>
            </div>
        </div>
    );
}
