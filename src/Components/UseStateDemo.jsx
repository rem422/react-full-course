import { useState } from "react";
const UseStateDemo = () => {
    const[name, setName] = useState('Guest');
    const[age, setAge] = useState(0);
    const[isEmployed, setIsEmployed] = useState(false)

const updateName = ()=> {
    setName('SpongeBob');
}

const incrementAge = () => {
    setAge(age + 2)

}

const toggleEmployedStatus = () => {
  setIsEmployed(!isEmployed);
}

  return (
    <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
        <p>Age: {age}</p>
        <button onClick={incrementAge}>Set Age</button>
        <p>Is Employed : {isEmployed ? 'Yes' : "No"}</p>
        <button onClick={toggleEmployedStatus}>Toggle Status</button>
    </div>
  )
}

export default UseStateDemo