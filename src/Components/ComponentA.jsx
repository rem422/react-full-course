// useContext() = React hoook that allows you to share values 
//                between multiple levels of components 
//                without passing props through each level.

// PROVIDER COMPONENT
// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.provider value={value}>
//        <Child/>
//    </MyCOntext.provider>

// CONSUMER COMPONENTS
// 1. import {useContext} from 'react';
//    import {MyContext} from "./ComponentA";
// 2. const value = useContext(MyContext);


import { useState, createContext } from "react"
import ComponentB from "./ComponentB"

export const userContext = createContext()

const ComponentA = () => {
  const[user, setUser] = useState('Rem Simiyu');

  return (
    <div className="box">
      <h1>Component A</h1>
      <h2>{`Hello ${user}`}</h2>

      <userContext.Provider value = {user}>
        <ComponentB user = {user}/>
      </userContext.Provider>
    </div>
  )
}

export default ComponentA