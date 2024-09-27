import axios from "axios";
const API_URL = "http://localhost:3000";

const getAll = async () => {
  const res = await axios.get(API_URL + "/post");

  return res.data;
};

const getById = async (_id) => {
  const res = await axios.get(`${API_URL}/post/id/${_id}`);
  return res.data;
};

const like = async (_id) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.post(
    `${API_URL}/post/likes/${_id}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
  return res.data;
};

const unlikes = async (_id) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.post(
    `${API_URL}/post/unlikes/${_id}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
  return res.data;
};

const create = async (body) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.post(`${API_URL}/post`, body, {
    headers: {
      authorization: token,
    },
  });
  return res.data;
};

const postsService = {
  getAll,
  getById,
  like,
  unlikes,
  create,
};

export default postsService;
