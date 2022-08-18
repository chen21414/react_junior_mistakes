import React, { useEffect, useMemo, useState } from 'react'

const template = () => {

const [name, setName] = useState("");
const [state, setState] = useState({
  name:"",
  selected: false,
});

//scenario: the handleSelect will make this effect runs everytime when click, even when selected: true already
//problem caused: primitive vs non-primitive data types
useEffect(()=>{
  console.log("the state has changed, useEffect runs!");
}, [state])//if we give here variables with primitive values, not a problem
           //but if object, need to be careful

//solution
const user = useMemo(
  () => ({
    name: state.name,
    selected: state.selected,
  }),
  [state.name, state.selected] //only depends on these two
);

useEffect(()=>{
  console.log("the state has changed, useEffect runs!");
}, [user])//depends on user


//solution#2
useEffect(()=>{
  console.log("the state has changed, useEffect runs!");
}, [state.name, state.selected])

//explaination:
const a = 'john'
const b = 'john'
a === b //true

const c = 1
const d = 1
c === d //true

true === true //true
false === false //true
//strings, numbers, and booleans, null, undefined are primitive data type

const x = {name:'john'}
const y = {name:'john'}
x === y //false
//objects refer to different points in the memory, so they are two diff objects with the same content.
//they are like two diff shopping cart

const z = y
z === y //true

[1] === [1] //false
//object, arrays, are non-primitive

const handleAdd = () => {
  setState((prev) => ({...prev, name}));
}

const handleSelect = () => {
  setState((prev) => ({...prev, selected: true}));
}

  return (
    <div>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
        <button onClick={handleAdd}>Add Name</button>
        <button onClick={handleSelect}>Select</button>
    </div>
  )
}

export default template