import { createSlice } from "@reduxjs/toolkit";
import { login } from "../services/login";
import { setToken } from "../services/blogs";

const loginSlice = createSlice({
    name: "login",
    initialState: null,
    reducers: {
        setUser(state, action) {
            return action.payload;
        },
        logoutUser(state, action) {
            return null;
        },
    },
});

export const { getUser, setUser, logoutUser } = loginSlice.actions;

export const sendLogIn = (creds) => {
    return async (dispatch) => {
        const user = await login({
            ...creds,
        });
        setToken(user.token);
        window.localStorage.setItem("loggedBlogUser", JSON.stringify(user));
        dispatch(setUser(user));
    };
};

export const sendLogOut = () => {
    return async (dispatch) => {
        setToken("");
        window.localStorage.removeItem("loggedBlogUser");
        dispatch(logoutUser());
    };
};

export const checkLogIn = () => {
    return async (dispatch) => {
        const loggedUserJSON = window.localStorage.getItem("loggedBlogUser");
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON);
            setToken(user.token);
            dispatch(setUser(user));
        }
    };
};

export default loginSlice.reducer;
