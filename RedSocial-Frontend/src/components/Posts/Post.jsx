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

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
    return (
      <div key={item}>
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h3" sx={{ color: "text.secondary", mb: 3 }}>
                <Link to={`/post/id/${post._id}`} className="nav-menu-link">
                  {post.body.charAt(0).toUpperCase() + post.body.slice(1)}
                </Link>
              </Typography>
              <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
                Autor:{" "}
                {post.userId.name
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </Typography>
              <Typography variant="body3" component="div">
                {user ? (
                  <div>
                    {post.likes.includes(user._id) ? (
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
                ) : (
                  <div></div>
                )}
              </Typography>
              <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                Likes: {likecounter(post.likes)}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Comments: {commentlist(post.commentId)}</Button>
            </CardActions>
          </Card>
        </Box>
      </div>
    );
  });

  return <>{post}</>;
};
export default Post;
