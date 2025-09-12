import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./src/reducers/blogReducer";
import notificationReducer from "./src/reducers/notificationReducer";
import loginReducer from "./src/reducers/loginReducer";
import usersReducer from "./src/reducers/usersReducer";
import commentsReducer from "./src/reducers/commentsReducer";

const store = configureStore({
    reducer: {
        blogs: blogReducer,
        notifications: notificationReducer,
        user: loginReducer,
        users: usersReducer,
        comments: commentsReducer,
    },
});

store.subscribe(() => console.log(store.getState()));

export default store;
