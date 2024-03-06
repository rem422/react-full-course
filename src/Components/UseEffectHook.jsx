// useEffect =  React hook that tells react DO SOME CODE WHEN (pick one):
//               This component re-renders
//               This component mounts
//               The state of a value

// useEffect(function, [dependencies])
// 1. useEffect(() => {})  Runs after every re-render
// 2. useEffect(() => {}, [])  Runs only on mount
// 3. useEffect(() => {}, [value])  Runs on mount + when value changes

//USES
// #1 Event litseners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching data fron an API
// #5 Clean up when component unmounts

import { useState, useEffect } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");
  const[width, setWidth] = useState(window.innerWidth + "px");
  const[height, setHeight] = useState(window.innerHeight + "px");

  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
  }, [count, color]);

  const addCount = () => {
    setCount(c => c + 1);
  };

  const subtractCount = () => {
    setCount(c => c - 1);
  };

  const changeColor = () => {
    setColor(c => c === 'green' ? 'red' : 'green');
  };


useEffect (() => {
  window.addEventListener("resize", handleResize);
  console.log('EVENT LITSENER ADDED');
  return () => {
    window.removeEventListener("resize", handleResize);
    console.log('EVENT LITSENER REMOVED');
  }
}, []);

useEffect(() => {
  document.title = `Size: ${width} x ${height}`
}, [width, height]);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <div>
      <p style={{color: color}}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtact</button> <br />
      <button onClick={changeColor}>Change Color</button>

      <p>Window Width: {width}</p>
      <p>Window Height: {height}</p>
    </div>
  );
};

export default UseEffectHook;
