import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAll, reset } from "../../redux/Posts/postsSlice";

const Posts = () => {
  const { isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchPosts = async () => {
      await dispatch(getAll());
      await dispatch(reset());
    };
    fetchPosts();
  }, [dispatch]);

  return <>{isLoading ? "Cargando..." : <Post />}</>;
};
export default Posts;
