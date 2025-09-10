import { createSlice } from "@reduxjs/toolkit";
import { getAll } from "../services/users";

const usersSlice = createSlice({
    name: "users",
    initialState: null,
    reducers: {
        setUsers(state, action) {
            return action.payload;
        },
    },
});

export const { setUsers } = usersSlice.actions;

export const getUsers = () => {
    return async (dispatch) => {
        const users = await getAll();
        dispatch(setUsers(users));
    };
};

export default usersSlice.reducer;
