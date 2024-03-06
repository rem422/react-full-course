// useContext() = React hoook that allows you to share values between multiple levels of components without passing props through each level.
import {useContext} from 'react';
import {userContext} from "./ComponentA.jsx";
import ComponentD from "./ComponentD"

const ComponentC = () => {

  const user = useContext(userContext);

  return (

    <div className="box">
      <h1>Component C</h1>
      <h2>{`Hello Again ${user}`}</h2>
      <ComponentD />
    </div>
  )
}

export default ComponentC