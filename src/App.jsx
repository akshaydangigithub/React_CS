import React, { useState } from "react";

const App = () => {
  let [count, setCount] = useState(0);

  const IncreaseValue = () => {
    setCount(count + 1);
  };

  const DecreaseValue = () => {
    setCount(count - 1);
  };

  // const [name, setName] = useState("Akshaay Dangi");

  return (
    <>
      <h1>Hello Evryone</h1>
      <span>count:{count}</span> <br />
      <button onClick={IncreaseValue}>Increase</button> <br />
      <button onClick={DecreaseValue}>Decrease</button>
      {/* {name} <br />
      <button onClick={() => setName("Nikhil")}>Change</button> */}
    </>
  );
};

export default App;
