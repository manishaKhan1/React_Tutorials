import React from 'react'

const Content = () => {
    
  const handleNameChange=()=>{
    const name=['Bob', 'Kalvin', 'Dave']
    const int=Math.floor(Math.random() *3 )
    return name[int]
  }

  const handleClick1=()=>{
    console.log("You clicked it");
  }

  const handleClick2=(name)=>{
    console.log(`${name} was clicked`);
  }

  const handleClick3=(e)=>{
    console.log("Innertext is using synthetic event ===>",e.target.innerText);
  }

  return (
    <main>
        <p onDoubleClick={handleClick1}>
          Hello {handleNameChange()}
          </p>

        <button onClick={handleClick1}>Click it</button>
        <br></br>
        <button onClick={()=>handleClick2('Dave')}>Click it</button>
        <br></br>

        {/* synthetic event */}
        <button onClick={(e)=>handleClick3(e)}>Click it</button>
    </main>
  )
}

export default Content