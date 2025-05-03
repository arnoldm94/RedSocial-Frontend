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

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          fxgx
        </Typography>
        <Typography variant="h5" component="div">
          sds
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>adjective</Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );

  const post = posts.map((post, item) => {
    return (
      <>
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">{card}</Card>
        </Box>
        <div key={item} className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <Link to={`/post/id/${post._id}`} className="nav-menu-link">
                {post.body}
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
              <div className="accordion-body">Comments: {commentlist(post.commentId)}</div>
            </div>
          </div>
        </div>
      </>
    );
  });

  return <>{post}</>;
};
export default Post;
