
import { useState, createContext, useContext } from "react";
const UserContext = createContext();

export default function Uc1() {
    const [user, setUser] = useState("Prasad");
    return (
        <div>
            <UserContext.Provider value={user}>
                <h1>{`Hello ${user}!`}</h1>
                {/* <p>{user}</p> */}
                <Component3 />
            </UserContext.Provider>
        </div>
    );
}
function Component2() {
    return (
        <>
            <h1>Component 2</h1>
            {/* <p>{user}</p> */}
            <Component3 />
        </>
    );
}

function Component3() {
    return (
        <>
            <h1>Component 3</h1>
            {/* <p>{user}</p> */}
            <Component4 />
        </>
    );
}

function Component4() {
    return (
        <>
            <h1>Component 4</h1>
            {/* <p>{user}</p> */}
            <Component5 />
        </>
    );
}

function Component5() {
    const user = useContext(UserContext);

    return (
        <>
            <h1>Component 5</h1>
             <p>{user}</p>
            <h2>{`Hello ${user} again!`}</h2>
        </>
    );
}