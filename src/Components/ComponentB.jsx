// useContext() = React hoook that allows you to share values between multiple levels of components without passing props through each level.

import {useContext} from 'react';
import {userContext} from "./ComponentA.jsx";
import ComponentC from "./ComponentC"

const ComponentB = () => {

  const user = useContext(userContext);

  return (
    <div className="box">
      <h1>Component B</h1>
      <h2>{`Hello There ${user}`}</h2>
      <ComponentC />
    </div>
  )
}

export default ComponentB