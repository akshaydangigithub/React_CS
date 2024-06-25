import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Layout
        img="https://plus.unsplash.com/premium_photo-1670934158407-d2009128cb02?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        head="Homepage"
        desc="This is my homePage in which my whole basic data of my website
        will be show. By visiting into this homepage you can
        gain basic knowledge of my modern webiste."
        btntext="Go to About"
        link="/about"
      />

      <Link to="/about">About</Link>
    </>
  );
};

export default Homepage;
