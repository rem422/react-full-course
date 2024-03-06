// useContext() = React hoook that allows you to share values between multiple levels of components without passing props through each level.

import {useContext} from 'react';
import {userContext} from "./ComponentA.jsx";

const ComponentD = () => {

  const user = useContext(userContext);

  return (
    <div className="box">
      <h1>Component D</h1>
      <h2>{`Bye ${user}`}</h2>
    </div>
  )
}

export default ComponentD