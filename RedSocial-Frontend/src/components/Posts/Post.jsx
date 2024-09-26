import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { like, unlikes } from "../../redux/posts/postsSlice";

const Post = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  const { user } = useSelector((state) => state.auth);

  const commentlist = (comments) => {
    for (let index = 0; index < comments.length; index++) {
      return comments[index].body;
    }
  };
  const likecounter = (likes) => {
    return likes.length;
  };

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
                ></button>
                <Link to={`/post/id/${post._id}`} className="nav-menu-link">
                  {" "}
                  {post.body}{" "}
                </Link>
              </h2>

              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse "
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">Autor: {post.userId.name}</div>

                <div className="accordion-body">likes: {likecounter(post.likes)}</div>
                <div className="accordion-body">Comments: {commentlist(post.commentId)}</div>
              </div>
            </div>
          ))}
        </div>
      }
    </>
  );
};
export default Post;
