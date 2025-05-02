import React from "react";
import "./Home.styles.scss";
import Posts from "../Posts/Posts";
import Card from "../Posts/Card";

const Home = () => {
  return (
    <>
      <h1>Red Social - Arnold</h1>
      <div className="title">
        <Posts />
        <Card />
      </div>
    </>
  );
};

export default Home;
