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
  const { posts } = useSelector((state) => state.posts);
  /*   const { post } = useSelector((state) => state.posts); */

  return (
    <>
      <h1>Post Detail</h1>

      {posts.map((item, index) => {
        if (item._id == _id) {
          return (
            <div key={index}>
              <h4>{item.body}</h4>
              <h6>Likes: {item.likes.length}</h6>
              <div>
                Creado por: {item.userId.name} || {item.userId.email}
              </div>
              <div>Fecha de publicación: {item.createdAt}</div>
            </div>
          );
        }
      })}
    </>
  );
};

export default PostDetail;
