import React, { useState } from "react";

const state = () => {
  const [user, setUser] = useState({
    title: "",
    desc: "",
    price: 0,
    category: "",
    tags: [],
    images: {
      sm: "",
      md: "",
      lg: "",
    },
    quantity: 0,
  });

  //better to use useReducer
  const handleChange = () => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="name"
      />
      <input
        type="text"
        name="surname"
        onChange={handleChange}
        placeholder="surname"
      />
      <input
        type="text"
        name="username"
        onChange={handleChange}
        placeholder="username"
      />
      <input
        type="text"
        name="email"
        onChange={handleChange}
        placeholder="email"
      />
      <input
        type="text"
        name="password"
        onChange={handleChange}
        placeholder="password"
      />
      <input
        type="text"
        name="country"
        onChange={handleChange}
        placeholder="country"
      />
      <input
        type="text"
        name="city"
        onChange={handleChange}
        placeholder="city"
      />
      <input
        type="text"
        name="address"
        onChange={handleChange}
        placeholder="address"
      />
    </div>
  );
};

export default state;
