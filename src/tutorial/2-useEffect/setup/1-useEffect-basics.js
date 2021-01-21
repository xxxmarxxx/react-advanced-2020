import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
// domyślnie uruchamia się po każdym re-render
// funkcja oczyszczania
// drugi parametr

const UseEffectBasics = () => {
const [value, setValue] = useState(0);
  useEffect(()=>{
console.log('call useEffect');
document.title = `to cwiczenia(${value})`
  })
  console.log('render component');
  return <>
  <h1>{value}</h1>
  <button className='btn' onClick={()=> setValue(value +1)}>
    click me
  </button>
  </>
};

export default UseEffectBasics;
