import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./src/reducers/blogReducer";
import notificationReducer from "./src/reducers/notificationReducer";

const store = configureStore({
    reducer: {
        blogs: blogReducer,
        notifications: notificationReducer,
    },
});

store.subscribe(() => console.log(store.getState()));

export default store;
