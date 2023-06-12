import React from 'react';
import { useState } from "react";

export default function Us() {
    // #1
    const [color, setcolor] = useState("red");

    // #2 We could create multiple state Hooks to track individual values.

    const [brand, setbrand] = useState("Activa");
    const [company, setCompany] = useState("Honda");
    const [year, setyear] = useState("2014");
    const [cost, setcost] = useState("75000");

    // #3 Or, we can just use one state and include an object instead!

    const [bike, setbike] = useState({
        brand: "Activa",
        company: "Honda",
        year: "2014",
        cost: 75000
    });

    // #4
    // When state is updated, the entire state gets overwritten.
    // What if we only want to update the color of our car?
    // If we only called setCar({color: "blue"}), this would remove the brand, model, and year from our state.
    // We can use the JavaScript spread operator to help us.

    const UpdateColor = () => {
        setbike(previousCode => {
            return { ...previousCode, cost: 99999 }
        })
    }
    return (
        <div>
            <h1>1: hooks UseState</h1>
            <p>My favorite color is {color}!</p>
            {/* #1 */}
            <button onClick={() => setcolor("pink")}>Color Updater</button>
            {/* #2 */}
            <p>{brand} , {company} , {year} , {cost}</p>
            {/* #3 */}
            {/* <p>{bike.brand} , {bike.company} , {bike.year} , {bike.cost}</p> */}
            {/* #4 */}
            <p>Before Updation</p>
            <p>{bike.brand} , {bike.company} , {bike.year} , {bike.cost}</p>
            <p>After Updation</p>
            <button onClick={UpdateColor}>Cost Updater</button>
        </div>
    );
}

