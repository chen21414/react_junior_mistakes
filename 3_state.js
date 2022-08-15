import React, { useState } from "react";

const state = () => {
  const [input, setInput] = useState("");
  const [user, setUser] = useState({
    username: "",
    email: "",
    images: [],
  });

  const changeUser = () => {
    //setUser((user.name = input)); //not working because we r not returning an user here, this is replacing everything
    setUser((prev) => ({ ...prev, name: input })); //return an object, and this object will include everything in the current state
  };

  return (
    <div>
      <h2>User:</h2>
      <input
        oncChange={(e) => setInput(e.target.value)}
        placeholder="enter..."
      />
      <button onClick={changeUser}>Change username</button>
      <span>Username is: {user.name}</span>
    </div>
  );
};

export default state;
