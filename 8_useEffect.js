import React, { useEffect, useState } from 'react'

const template = () => {

const [number, setNumber] = useState(0);

//problem
useEffect(() => {
  console.log("effect"); //there's infinite loop
  setInterval(() => {
    setNumber(number + 1)
  }, 1000)
}, [number])

//solution
//almost perfect but still a problem:
//when we create another interval wo cleaning the prev one
useEffect(() => {
  console.log("effect"); 
  setInterval(() => {
    setNumber(prev=>prev + 1)
  }, 1000)
}, [])

//if added random chars here will broke the counter
return (
  <div>
      {number}dfgfdg
  </div>
)


//real solution
useEffect(() => {
  console.log("effect"); 
   const interval = setInterval(() => {
    setNumber(prev=>prev + 1)
  }, 1000);

  return ()=>{
    clearInterval(interval)
  }
}, [])

  return (
    <div>
        {number}
    </div>
  )
}

export default template