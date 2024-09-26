import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "./postsService";

const initialState = {
  posts: [],
  isLoading: false,
  post: {},
};

export const getAll = createAsyncThunk("post", async () => {
  try {
    return await postsService.getAll();
  } catch (error) {
    console.error(error);
  }
});

export const getById = createAsyncThunk("post/getById", async (_id) => {
  try {
    return await postsService.getById(_id);
  } catch (error) {
    console.error(error);
  }
});

export const like = createAsyncThunk("post/like", async (_id) => {
  try {
    return await postsService.like(_id);
  } catch (error) {
    console.error(error);
  }
});
export const unlikes = createAsyncThunk("post/unlikes", async (_id) => {
  try {
    return await postsService.unlikes(_id);
  } catch (error) {
    console.error(error);
  }
});

export const create = createAsyncThunk("post/create", async (body) => {
  try {
    return await postsService.create(body);
  } catch (error) {
    console.error(error);
  }
});

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAll.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(getAll.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getById.fulfilled, (state, action) => {
        state.post = action.payload;
      })
      .addCase(like.fulfilled, (state, action) => {
        const post = state.posts.map((post) => {
          if (post._id === action.payload._id) {
            post = action.payload;
          }
          return post;
        });
        state.post = post;
      })
      .addCase(unlikes.fulfilled, (state, action) => {
        const post = state.posts.map((post) => {
          if (post._id === action.payload._id) {
            post = action.payload;
          }
          return post;
        });
        state.post = post;
      })
      .addCase(create.fulfilled, (state, action) => {
        state.posts = [...state.posts, action.payload];
      });
  },
});

export const { reset } = postsSlice.actions;
export default postsSlice.reducer;
