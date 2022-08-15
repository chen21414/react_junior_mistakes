import React, { useState } from "react";

const state = () => {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };

  const increaseAsync = () => {
    setTimeout(() => {
      //setNumber(number + 1); //having one issue that during 2 seconds, the added number won't reflect in here
      setNumber((currentNumber) => currentNumber + 1); //better to use function version instead of just update the # (re-creating our #)
    }, 2000);
  };

  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={increaseAsync}>Increase Async</button>
      <h1>{number}</h1>
    </div>
  );
};

export default state;
