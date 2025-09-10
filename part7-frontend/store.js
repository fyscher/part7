import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./src/reducers/blogReducer";
import notificationReducer from "./src/reducers/notificationReducer";
import loginReducer from "./src/reducers/loginReducer";
import usersReducer from "./src/reducers/usersReducer";

const store = configureStore({
    reducer: {
        blogs: blogReducer,
        notifications: notificationReducer,
        user: loginReducer,
        users: usersReducer,
    },
});

store.subscribe(() => console.log(store.getState()));

export default store;
