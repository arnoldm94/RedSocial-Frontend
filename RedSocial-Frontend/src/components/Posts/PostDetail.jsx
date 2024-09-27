import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../redux/Posts/postsSlice.js";

const PostDetail = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getById(_id));
  }, []);
  const { _id } = useParams();

  const { post } = useSelector((state) => state.posts);

  return (
    <>
      <h1>Post Detail</h1>
      <h4>{post.body}</h4>
      <h6>Likes: {post.likes.length}</h6>
      <div>
        Creado por: {post.userId.name} || {post.userId.email}
      </div>
      <div>Fecha de publicación: {post.createdAt}</div>
    </>
  );
};

export default PostDetail;
