import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme : "light",
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        light: (state) => {
            state.theme = "light";
        },
        dark: (state) => {
            state.theme = "dark";
        }
    }
});

export default themeSlice.reducer;
export const { light, dark } = themeSlice.actions;