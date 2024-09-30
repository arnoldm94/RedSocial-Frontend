import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  HeartOutlined,
  HeartFilled,
  DownCircleOutlined,
  UpCircleOutlined,
} from "@ant-design/icons";
import { like, unlikes } from "../../redux/posts/postsSlice";
import "./Posts.styles.scss";

const Post = (props) => {
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

  const post = posts.map((post, item) => {
    const isAlreadyLiked = post.likes.includes(user._id);

    return (
      <div key={item} className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <Link to={`/post/id/${post._id}`} className="nav-menu-link">
              {" "}
              {post.body}{" "}
            </Link>
            <DownCircleOutlined
              className="button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item}`}
              aria-expanded="true"
              aria-controls={`collapse${item}`}
            ></DownCircleOutlined>
          </h2>

          <div
            id={`collapse${item}`}
            className="accordion-collapse collapse "
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">Autor: {post.userId.name}</div>

            <div className="accordion-body">likes: {likecounter(post.likes)}</div>
            <div className="accordion-body">Comments: {commentlist(post.commentId)}</div>
            {isAlreadyLiked ? (
              <HeartFilled
                onClick={() => {
                  dispatch(unlikes(post._id));
                  likecounter(post.likes);
                }}
              />
            ) : (
              <HeartOutlined
                onClick={() => {
                  dispatch(like(post._id));
                  likecounter(post.likes);
                }}
              />
            )}
          </div>
        </div>
      </div>
    );
  });

  return <>{post}</>;
};
export default Post;
