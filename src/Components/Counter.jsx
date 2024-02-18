import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

const increment = () => {
    setCount(count + 1);
}

const decrement = () => {
    setCount(count - 1);
}

const reset = () => {
    setCount(0);
}

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increase</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrease</button>
    </div>
  )
}

export default Counter