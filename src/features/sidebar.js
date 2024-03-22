import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    active : ""
}

const sidebarSlice = createSlice({
    name : "sidebar",
    initialState,
    reducers : {
        open: (state) => {
            state.active = "active-sidebar";
        },
        close: (state) => {
            state.active = "";
        }
    }
});


export default sidebarSlice.reducer;
export const {open,close} = sidebarSlice.actions