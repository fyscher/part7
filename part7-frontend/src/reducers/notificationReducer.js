import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: "notifications",
    initialState: null,
    reducers: {
        setNotification(state, action) {
            return action.payload;
        },
    },
});

export const { setNotification } = notificationSlice.actions;

export const notify = (status) => {
    return async (dispatch) => {
        dispatch(setNotification(status));
        setTimeout(() => {
            dispatch(setNotification(null));
        }, 5000);
    };
};

export default notificationSlice.reducer;
