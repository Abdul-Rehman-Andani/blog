import { configureStore } from "@reduxjs/toolkit";
import navSlice from "../features/navbar";
import themeSlice from "../features/themeSlice";

const store = configureStore({
    reducer: {
        navbar: navSlice,
        theme : themeSlice,
    }
});

export default store;