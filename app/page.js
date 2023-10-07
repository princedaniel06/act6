'use client'; 
import React, { useState } from 'react'; 
export default function Home() { 
  const [num, setNum] = useState(0); 
  const increment = () => { 
    setNum((prevNum) => prevNum + 1); }; 
    const decrement = () => { 
      setNum((prevNum) => prevNum - 1); }; 
      return (
        <div>
          <h1>
            Counter
          </h1>
          <span><h3>counter: {num}</h3></span>
          <div className= 'buttonc'>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
          </div>
        </div>
  ); }