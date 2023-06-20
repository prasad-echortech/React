import React, { useState, useRef, useEffect } from 'react';
import Home from './Home';

export default function Text() {

    let [inputs, setinputs] = useState({});

    let previousInputValue = useRef({});

    useEffect(() => {
        previousInputValue.current = inputs;
    }, [inputs]);

    const handleChange = (event => {
        const name = event.target.name;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setinputs(values => ({ ...values, [name]: value }))
    })

    const handleSubmit = (event) => {
        event.preventDefault();

        <Home formData = {previousInputValue}/>

    }

    return (
        <>
            <div className='row d-flex justify-content-center mt-5'>
                <div className='col-5'>
                    <h1>Text Box</h1>
                    <form onSubmit={handleSubmit}>

                        <label>Text-Box Name</label>
                        <input type="text" name="textboxname" value={inputs.textboxname || ''} onChange={handleChange} className="form-control" id="" />

                        <label>Text-Box Type</label>
                        <select name="inputType" value={inputs.inputType || ""} onChange={handleChange} className="form-control">
                            <option type="text" >Text</option>
                            <option type="number"  >Number</option>
                            <option type="email">Email</option>
                        </select>

                        <input type='checkBox' name="isRequired" value={inputs.isRequired || false} onChange={handleChange} /> isRequired
                        <br />
                        <input type="submit" className='btn btn-success' value="Done" />

                    </form>
                </div>
            </div>
        </>
    );
}
