import React, { useState } from "react";
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

export default function Home() {

    const [activeComponent, setActiveComponent] = useState(null);

    const handleClick = (component) => {
        setActiveComponent(component)
    }

    return (
        <>
       <div className="row">
            <div className="col-1">
                {Object.keys(components).map((compkey) => (

                    <button key={compkey} className="btn btn-success m-1 d-flex flex-row  mt-5 ms-5" onClick={() => handleClick(compkey)} >
                        {compkey.toUpperCase()}
                    </button>
                    
                ))}
               
                </div> 
           
                <div className="col-7">
                    {activeComponent && React.createElement(components[activeComponent])}
                </div>

                <div className="col-5 d-flex justify-content-center mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Form Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>

                        <div className="col-5 d-flex justify-content-center mb-3">
                        <textarea className="form-control" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                        <label htmlFor="floatingTextarea2">Enter Text Here</label>
                    </div>
                </div>
        
        </>
    );
}
