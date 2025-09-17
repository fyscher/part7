import { createSlice } from "@reduxjs/toolkit";
import blogService from "../services/blogs";
import { notify } from "../reducers/notificationReducer";

const blogSlice = createSlice({
    name: "blogs",
    initialState: [],
    reducers: {
        updateBlog(state, action) {
            const id = action.payload.id;
            return state.map((m) => (m.id !== id ? m : action.payload));
        },
        appendBlog(state, action) {
            state.push(action.payload);
        },
        setBlogs(state, action) {
            return action.payload;
        },
        removeBlog(state, action) {
            const id = action.payload;
            return state.filter((m) => m.id !== id);
        },
    },
});

export const { updateBlog, appendBlog, setBlogs, removeBlog } =
    blogSlice.actions;

export const likeBlog = (id, changedLike) => {
    return async (dispatch) => {
        await blogService.update(id, changedLike);
        dispatch(updateBlog(changedLike));
    };
};

export const initializeBlogs = () => {
    return async (dispatch) => {
        const blogs = await blogService.getAll();
        dispatch(setBlogs(blogs));
    };
};

export const createBlog = (content) => {
    return async (dispatch) => {
        const newBlog = await blogService.create(content);
        dispatch(appendBlog(newBlog));
    };
};

export const deleteBlog = (id) => {
    return async (dispatch) => {
        try {
            await blogService.remove(id);
            dispatch(removeBlog(id));
            dispatch(notify("Blog Deleted!"));
        } catch (err) {
            console.log("deleteBlog: res: ", err);
            dispatch(notify("Hey, that's not yours!"));
        }
    };
};

export default blogSlice.reducer;
