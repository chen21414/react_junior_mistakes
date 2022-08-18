import React, { useEffect, useState } from 'react'

const template = () => {

const [number, setNumber] = useState(0);

useEffect(()=>{
    console.count("useEffect runs!");
}, [number])//if we want useEffect to render only when number gets updated, need to depend the number, 
            //otherwise rerender everytime component updates

useEffect(()=>{
    console.count("useEffect runs!");
}, [])//only runs at the begining

  return (
    <div>
        <span>You clicked {number} times</span>
        <button onClick={()=> setNumber((prev) => prev + 1)}>
            Increase
        </button>
    </div>
  )
}

export default template