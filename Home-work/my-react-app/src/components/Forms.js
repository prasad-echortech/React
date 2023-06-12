import React, { useState , useContext } from 'react';
import UserContext from "./Ex"

function Forms() {
    //     const [name, setName] = useState("");
    // const handlefun = (event) => {
    //     event.preventDefault();
    //     alert(`the name you entered is ${name}`)
    // }

    const [inputs, setinputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setinputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        alert(inputs);
    }
    const user = useContext(UserContext);
    return (
        <div>
            <h1>IAm Forms</h1>
            <h2>{`Hello ${user} again!`}</h2>
            {/* <form onSubmit={handlefun}>
                <div className="mb-3">
                    enter youtr name:<input type="text" className="form-control" value={name} onChange={(e) => {
                        setName(e.target.value)
                        console.log(e);
                    }} />
                </div>
                <button type="submit">submit</button>
            </form> */}

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    enter your name:<input type="text" className="form-control" name="username" value={inputs.username || ""} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    enter your age:<input type="number" className="form-control" name="age" value={inputs.age || ""} onChange={handleChange} />
                </div>
                <button type="submit">submit</button>
            </form>

        </div>
        
    );
}

export default Forms;
