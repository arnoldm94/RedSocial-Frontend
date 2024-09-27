import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { like, unlikes } from "../../redux/posts/postsSlice";
import "./Profile.styles.scss";
import CreatePost from "../../components/Posts/CreatePost";

const ProfilePost = (props) => {
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

  const post = posts.map((item) => {
    const isAlreadyLiked = item.likes.includes(user._id);

    if (props.usuario == item.userId.email) {
      return (
        <div className="container individual" key={item._id}>
          <h2>
            {" "}
            <Link to={`/post/id/${item._id}`} className="nav-menu-link">
              {" "}
              {item.body}{" "}
            </Link>
          </h2>

          <h5>Autor: {item.userId.name}</h5>

          <h6>Comments: {commentlist(item.commentId)}</h6>
          <span>Likes: {item.likes.length}</span>
          {isAlreadyLiked ? (
            <HeartFilled
              onClick={() => {
                dispatch(unlikes(item._id));
                likecounter(item.likes);
              }}
            />
          ) : (
            <HeartOutlined
              onClick={() => {
                dispatch(like(item._id));
                likecounter(item.likes);
              }}
            />
          )}
        </div>
      );
    }
  });
  return (
    <>
      <CreatePost></CreatePost>
      {post}
    </>
  );
};

export default ProfilePost;
