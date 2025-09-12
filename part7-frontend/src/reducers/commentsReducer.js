import { createSlice } from "@reduxjs/toolkit";
import blogService from "../services/blogs";

const commentsSlice = createSlice({
    name: "comments",
    initialState: [],
    reducers: {
        updateComment(state, action) {
            const id = action.payload.id;
            return state.map((m) => (m.id !== id ? m : action.payload));
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

export const { updateComment, setComments, removeComment } =
    commentsSlice.actions;

export const initializeComments = (id) => {
    return async (dispatch) => {
        const comments = await blogService.getComments(id);
        dispatch(setComments(comments));
    };
};

export default commentsSlice.reducer;
