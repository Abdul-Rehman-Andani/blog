import { configureStore } from "@reduxjs/toolkit";
import navSlice from "../features/navbar";
import themeSlice from "../features/themeSlice";
import sidebarSlice from "../features/sidebar";

const store = configureStore({
    reducer: {
        navbar: navSlice,
        theme : themeSlice,
        sidebar : sidebarSlice
    }
});

export default store;