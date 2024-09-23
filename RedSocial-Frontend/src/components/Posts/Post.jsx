import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Post = () => {
  const { posts } = useSelector((state) => state.posts);

  return (
    <>
      {
        <div className="accordion" id="accordionExample">
          {posts.map((post, index) => (
            <div key={post._id} className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="true"
                  aria-controls={`collapse${index}`}
                >
                  <Link to={`/post/id/${post._id}`}>Post nº {index} </Link>
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">{post.body}</div>
              </div>
            </div>
          ))}
        </div>
      }
    </>
  );
};
export default Post;
