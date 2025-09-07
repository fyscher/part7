import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./src/reducers/blogReducer";

const store = configureStore({
  reducer: {
    blogs: blogReducer,
  },
});

store.subscribe(() => console.log(store.getState()));

export default store;
