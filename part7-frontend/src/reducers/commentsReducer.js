import { createSlice } from "@reduxjs/toolkit";
import blogService from "../services/blogs";

const commentsSlice = createSlice({
    name: "comments",
    initialState: [],
    reducers: {
        addComment(state, action) {
            state.push(action.payload);
        },
        setComments(state, action) {
            return action.payload;
        },
        removeComment(state, action) {
            const id = action.payload;
            return state.filter((m) => m.id !== id);
        },
    },
});

export const { addComment, setComments, removeComment } = commentsSlice.actions;

export const initializeComments = (id) => {
    return async (dispatch) => {
        const comments = await blogService.getComments(id);
        dispatch(setComments(comments));
    };
};

export const createComment = (id, newContent) => {
    return async (dispatch) => {
        const comment = await blogService.createComment(id, newContent);
        dispatch(addComment(comment));
    };
};

export default commentsSlice.reducer;
