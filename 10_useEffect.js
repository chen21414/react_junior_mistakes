import React, { useEffect, useState } from 'react'

const template = () => {

const [posts, setPosts] = useState([]);

//this is a second after clicking the homepage and direct to here
useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      alert("posts are ready, updating state!")
      setPosts(data);
      console.log(data);
      //will fetch even at the homepage level (when click go back; but it should end immediately as we leave the component)
    });
}, []);

    //solution, clean up
    useEffect(()=>{
      let subscribed = true;
    
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
          if(subscribed){
            alert("posts are ready, updating state!")
            setPosts(data);
            console.log(data);
          }
          
        
        return ()=>{
          subscribed = false;
        }
        });
    }, []);

  return (
    <div>
        {posts?.map((p)=>(
          <p key={p.id}>{p.title}</p>
        ))}
    </div>
  )
}

export default template