import React, { useState, useEffect } from 'react';

export default function ChLogic(url) {
  const [data, setdata] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setdata(data))
  }, [url]);
  return [data] 
  return (
    <>
    <h1>hi iam custoHook  Logic</h1>
    </>
  );
}
