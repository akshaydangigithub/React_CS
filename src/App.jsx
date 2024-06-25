import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./screens/Homepage";
import About from "./screens/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
