import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    signin: true,
    logout: false,
    profile : false
}

const navSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        signin: (state) => {
            state.signin = false;
            state.logout = true;
            state.profile = true;
        },
        logout: (state) => {
            state.signin = true;
            state.logout = false;
            state.profile = false;
        }
    }
});

export default navSlice.reducer;
export const { signin, logout } = navSlice.actions;