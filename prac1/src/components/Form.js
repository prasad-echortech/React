import React, { useState } from "react";

export default function Form(props) {
 const handleOnClick = () => {
    let uc = text.toUpperCase();
    setText(uc)
  }

  const handleOnChange = (event)=>{
    console.log("on change");
    setText(event.target.value)

  }
 
 
  const [text, setText] = useState("hello iam state default");
  // #1
let textStyle = ()=> {
  return `text-${props.mode === "light" ? "dark" : "light"}`;
  }
  // #2
  let textstyle = `text-${props.mode === "light" ? "dark" : "light"}`;
  return (
    <>
      <h1 class= {textStyle()}>{props.title}</h1>
      <div className="form-group">
        <textarea
          className="form-control my-0"
          value={text} onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="10"
        ></textarea>
      </div>
      <button className="btn btn-danger" onClick={handleOnClick}>Convert To UpperCase</button>
      <div className="container">
        <h1 class={textStyle()}>your text summary</h1>
        <p class={`${textStyle()} mt-5`}>Time Take To Red: {0.008 * text.split(text == "" ? "" : " ").length}</p>
        <p class={textStyle()}>Summary: <br />{text}</p>
        <p class={textStyle()}>characters : {text.length} | words {text.split(text == "" ? "" : " ").length}</p>
      </div>
    </>
  );
}
