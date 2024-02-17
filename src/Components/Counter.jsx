import { useState } from "react";
const Counter = () => {
    const[name, setName] = useState('Guest');
    const[age, setAge] = useState(0);

const updateName = ()=> {
    setName('SpongeBob');
}

const incrementAge = () => {
    setAge(age + 1)
}

  return (
    <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
        <p>Age: {age}</p>
        <button onClick={incrementAge}>Set Age</button>
    </div>
  )
}

export default Counter