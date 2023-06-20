import React from 'react';
import Nav from "./form-elements/Nav";
import Text from "./form-elements/Text";
import Dropdown from "./form-elements/Dropdown";
import Checkbox from "./form-elements/Checkbox";
import Textarea from "./form-elements/Textarea";
import Radio from "./form-elements/Radio";
import Home from "./form-elements/Home"
import Error from "./form-elements/Error";
// import AnotherComponent from './form-elements/AnotherComponent';
import FF from './form-elements/FF';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="Text" element={<Text />} />
          <Route path="Dropdown" element={<Dropdown />} />
          <Route path="Radio" element={<Radio />} />
          <Route path="Checkbox" element={<Checkbox />} />
          <Route path="Textarea" element={<Textarea />} />
          <Route path="ff" element={<FF />} />
          <Route path="ff/:id" element={<FF />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


