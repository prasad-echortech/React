
import "./App.css";
// import Modes from "./components/Modes";
// import Navbar from "./components/Navbar";
import Navbar from "./components/Navbar1";
import Form from "./components/Form";
import React, { useState } from "react";


function App() {

  const [mode, setMode] = useState("light");

  let toggleMode = () => {
    if (mode === "light") {
      setMode('dark')
      document.body.style.backgroundColor = "black"
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
    }
  }

  return (
    <>
      <div className="container-fluid">
        <Navbar title="PropTitleHere" mode={mode} toggleMode={toggleMode} />
        <Form title="Write Something Here" mode={mode} />
        {/* <Modes /> */}
      </div>
    </>
  );
}

export default App;
