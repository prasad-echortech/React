import React from 'react';
import Ex2 from './Ex2';
import Car from './Car';
import Forms from './Forms';
import { createContext, useState ,useContext} from "react";
import MissedGoal from './MissedGoal';

const UserContext = createContext();


export default function Ex(props) {

    const [user, setUser] = useState("Prasad######");

    let myobj = {
        name: "sarella sai durga prasad",
        age: 24
    }
    let cars = ['audi', 'Mustang']
    let cars1 = [
        { id: 1, brand: "Audi" },
        { id: 2, brand: "Mustang" },
        { id: 3, brand: "Bmw" },
        { id: 4, brand: "Audi" },
        { id: 5, brand: "Mustang" },
        { id: 6, brand: "Bmw" }
    ]
    console.log(typeof cars);

    const usingJsx = "i love jsx";
    let biNum;
    if (1000 > 200) {
        biNum = `Bigger`;
    } else {
        biNum = "Smaller";
    }
    // var biNum;

    const shoot = (a, b) => {
        alert(a)
        alert(b.type)
    }

    return (
        <>
        <div>
        <UserContext.Provider value={user}>
                <h1>{`Hello first time : ${user}!`}</h1>
                {/* <Forms/> */}
            </UserContext.Provider>
        </div>
        

            <h1>IAM Ex</h1>
            {/* <button className='btn btn-danger' onClick={ () => shoot("hai comando")}>click</button> */}
            <button className='btn btn-danger' onMouseOver={(event) => shoot("hai comando", event)}>click</button>
            <h1>Iam component 1</h1>
            <Ex2 greetings="hai" result={biNum} myinfo={myobj} cars={cars} />
            <div style={{ textAlign: "center" }}>
                {/* with JSX */}
                <h1>{usingJsx}</h1>
                <h1>{5 + 100}</h1>
            </div>
            <div style={{display:"inline-block"}}> <ul >
                <li>Apples</li>
                <li>Bananas</li>
                <li>Cherries</li>
            </ul></div>
            <br />
           
            <input className='hi' type="text" />
            <h1 style={{ color: props.color }}>if else output : {biNum}</h1>
            <h1>if else output :{100 > 200 ? "bigger" : "Smaller"}</h1>
            <h1>Who lives in my garage?</h1>
            <ul style={{display:"inline-block"}}>
                {cars1.map((ele) => <Car brand={ele.brand} key={ele.id} />)}
            </ul>

            <Forms />

           
        </>
    );

}

