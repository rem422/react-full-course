// useState() = Re-renders the component when the state value changes.

// useRef() = "Use Reference" Does not cause  re-renders when its value changes. When you want a component to 'remember' some information, but you don't want that information to trigger new renders.

// 1. Accessing/ Interacting with DOM elements
// 2. Handling Focus, Animations, and Transitions
// 3. Managing Timers and Intervals.

import { useRef, useEffect  } from "react"

const UseRef = () => {
  // let[number, setNumber] = useState(0);

  const inputRef1 = useRef(0);
  const inputRef2 = useRef(0);
  const inputRef3 = useRef(0);

useEffect(() => {
  console.log('COMPONENT RENDERED');
});

  const handleClick1 = () => {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = 'blue';
    inputRef2.current.style.backgroundColor = '';
    inputRef3.current.style.backgroundColor = '';
  };

  const handleClick2 = () => {
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor = '';
    inputRef2.current.style.backgroundColor = 'blue';
    inputRef3.current.style.backgroundColor = '';
  };

  const handleClick3 = () => {
    inputRef3.current.focus();
    inputRef1.current.style.backgroundColor = '';
    inputRef2.current.style.backgroundColor = '';
    inputRef3.current.style.backgroundColor = 'blue';
  };

  return (
    <div>
      <input ref={inputRef1} /> 
      <br />
      <button onClick={handleClick1}>Click Me 1!</button>
      <br />

      <input ref={inputRef2} /> 
      <br />
      <button onClick={handleClick2}>Click Me 2!</button>
      <br />
      
      <input ref={inputRef3} /> 
      <br />
      <button onClick={handleClick3}>Click Me 3!</button>
    </div>
  );
};

export default UseRef