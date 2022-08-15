import React, { useState } from "react";

const state = () => {
  const [user, setUser] = useState();

  //scenario#1: if we don't have user yet, below will be white screen
  return (
    <div>
      <span>Username is: {user.name}</span>
    </div>
  );

  //solution:
  return (
    <div>
      {/* if there's a user, show me this span */}
      {user && <span>Username is: {user.name}</span>}
    </div>
  );

  //solution:
  return (
    <div>
      <span>Username is: {user?.name}</span>
    </div>
  );

  //solution (best recommended):
  const [user, setUser] = useState({
    username: "",
    email: "",
    images: [],
  });
  return (
    <div>
      {/* so even below won't have problem */}
      <span>Profile Pic: {user.images[1]}</span>
    </div>
  );
};

export default state;
