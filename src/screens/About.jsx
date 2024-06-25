import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Layout
        img="https://plus.unsplash.com/premium_photo-1670934158275-0a51383caa1d?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        head="About Page"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ab quos ut ipsa quasi aut laudantium, asperiores nostrum nisi facere quisquam cumque tenetur sit ducimus distinctio provident quibusdam accusamus ipsum enim doloribus."
        btntext="Go to Home"
        link="/"
      />
      
      <Link to="/">Homepage</Link>
    </>
  );
};

export default About;
