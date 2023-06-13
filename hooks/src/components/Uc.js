import React, { useState } from "react";

export default function Uc() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <>
      <h1>{`Hello ${user}!`}</h1>
      <p>{user}</p>
      <Component2 user={user} />
  
    </>
  );
}

function Component2({ user }) {
  return (
    <>
      <h1>Component 2</h1>
      <p>{user}</p>
      <Component3 user={user} />
   
    </>
  );
}

function Component3({ user }) {
  return (
    <>
      <h1>Component 3</h1>
      <p>{user}</p>
      <Component4 user={user} />
     
    </>
  );
}

function Component4({ user }) {
  return (
    <>
      <h1>Component 4</h1>
      <p>{user}</p>
      <Component5 user={user} />
     
    </>
  );
}

function Component5({ user }) {
  return (
    <>
      <h1>Component 5</h1>
      <p>{user}</p>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

