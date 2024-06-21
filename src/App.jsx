import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <Card text="this is first card" />
      <Card data="this is 2 data" text="this is second card" />
      <Card data="this is data" />
    </div>
  );
};

export default App;
