import React from "react";
import "./Home.styles.scss";
import Posts from "../Posts/Posts";

const Home = () => {
  return (
    <>
      <h1>Red Social - Arnold</h1>

      <Posts />

      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/img/holy.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/img/holy.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/img/holy.png" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Home;
