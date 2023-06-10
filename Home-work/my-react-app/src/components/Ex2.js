import React from 'react';
import Goal from './Goal';

export default function Ex2(props) {
  // console.log(props);
  let carsData = props.cars;
  return (
    <>
      <Goal />
      <div>
        <h1>Hi IAM EX2</h1>
        <h1>iam component 2 :  {props.greetings}</h1>
        <h1>iam component2 Result :  {props.result}</h1>
        <br />
        <h1>my information : {props.myinfo.name} </h1>
        <h1>my information : {props.myinfo.age} </h1>
        <h1>{carsData.length > 0 && <p>
          You have {carsData.length} cars in your garage.
        </p>}</h1>
        <h1>{carsData.length > 0 ? `you have ${carsData.length} cars in your garage` : ""}</h1>

      </div>
    </>
  );
}
