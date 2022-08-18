import React, { useEffect, useState } from 'react'

const template = () => {

const [toggle, setToggle] = useState(false);

useEffect(()=> {
  console.log('effect runs!');

  //return a clean up function (like an unmount)
  return ()=>{
    console.log('wait! before running the effect, I should clean up first');
    //clean something from the previous effect
    console.log('okey done! you can run!');

    //this prevents any memory leaks and make app runs much faster
  }
},[toggle])

  return (
    <div>
        <button onClick={()=> setToggle(!toggle)}>
            Toggle
        </button>
    </div>
  )
}

export default template