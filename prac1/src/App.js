
import About from "./components/About";
import Navbar from "./components/Navbar1";
import Form from "./components/Form";
import { useState } from "react";
// import { Route, Routes} from "react-router-dom";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



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
      <Router>
        <Navbar title="Utils" mode={mode} toggleMode={toggleMode} />
        <div className="container-fluid mt-2">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route  exact path="/">
              <Form title="Write Something Here" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
