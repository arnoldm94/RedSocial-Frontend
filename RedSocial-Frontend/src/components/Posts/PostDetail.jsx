import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../redux/posts/postsSlice";

const PostDetail = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getById(_id));
  }, []);
  const { _id } = useParams();

  const { post } = useSelector((state) => state.posts);

  return (
    <>
      {post && (
        <div>
          <h1>Post Detail</h1>
          <div>{post.body}</div>
          <div>{post.createdAt}</div>
        </div>
      )}
    </>
  );
};

export default PostDetail;
