// קופנינטת הוקס / קופנינטת פונקציה חדש מ2020
import React, { useState } from 'react';

function Counter(props){
  // state = {counter:99 , user:"koko"}
  let [counter,setCounter] = useState(99);
  let [user,setUser] = useState("kpko");

  const add1 = () => {
    setCounter(counter+1)
  }

  return(
    <div className="container">
      <h2>{user} Counter: {counter}</h2>
      <button onClick={add1}>add 1</button>
    </div> 
  )
}

export default Counter