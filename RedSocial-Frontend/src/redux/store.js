import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice.js";
import posts from "./Posts/postsSlice.js";

export const store = configureStore({
  reducer: { auth, posts },
});
