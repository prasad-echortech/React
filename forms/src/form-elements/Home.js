import React, { useState, useRef, useEffect } from "react";
import Text from "./Text";
import Dropdown from "./Dropdown";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import Textarea from "./Textarea";

let components = {
    text: Text,
    checkbox: Checkbox,
    radio: Radio,
    textarea: Textarea,
    dropdown: Dropdown,
};

export default function Home({formData}) {
    const [inputs, setinputs] = useState({});
    const [activeComponent, setActiveComponent] = useState(null);

    const previousInputValue = useRef({});

    useEffect(() => {
        previousInputValue.current = inputs;
    }, [inputs]);

    const handleChange = (event => {
        const name = event.target.name;
        const value = event.target.value;
        setinputs(values => ({ ...values, [name]: value }))
    })

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(' http://localhost:3000/father', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(previousInputValue.current)
        })
    }

    const handleClick = (component) => {
        setActiveComponent(component)
    }

    return (
        <>
            <div className="row ">
                <div className="col-1 container ">
                    {Object.keys(components).map((compkey) => (
                        <button key={compkey} className="btn btn-success  d-flex flex-row  mt-5 ms-5 justify-content-center"
                            onClick={() => handleClick(compkey)} style={{ width: "120px" }}>
                            {compkey.toUpperCase()}
                        </button>
                    ))}


                    <form onSubmit={handleSubmit}>

                        <label>Form Name</label>
                        <input type="text" name="formName" value={inputs.formName || ''} onChange={handleChange} />
                        <label>FormDesc</label>
                        <textarea id="" cols="30" rows="3" name="formDesc" value={inputs.formDesc || ''} onChange={handleChange} ></textarea>
                        <button className="btn btn-success" type="submit">Save-Form</button>

                    </form>

                </div>
                <div className="col-8 mt-1">
                    {activeComponent && React.createElement(components[activeComponent])}
                </div>
            </div>

        </>
    );
}
