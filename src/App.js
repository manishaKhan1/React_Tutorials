import React, { useState } from 'react'
import './App.css';

function App() {

  const [data, setData]=useState("Anil")
  const [click, setClick]=useState(0)

  const updateData= ()=>{
   
      setData("Manisha")
  }

  const handleClick=()=>{
    setClick(click+1)
  }

  return (
    <div className="App">
      <h1>State in React !</h1>
      <h3>Welcome {data}</h3>
      <button onClick={updateData} >update data</button>
      <br></br>
      <button onClick={handleClick}>Click Count</button>
      <h3>count is == {click}</h3>
    </div>
  );
}

export default App;
