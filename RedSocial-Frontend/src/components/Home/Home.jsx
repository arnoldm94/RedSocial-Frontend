import React from "react";
import "./Home.styles.scss";
import Posts from "../Posts/Posts";

const Home = () => {
  return (
    <>
      <h1>Red Social - Arnold</h1>
      <div className="title">
        <Posts />
      </div>
    </>
  );
};

export default Home;
