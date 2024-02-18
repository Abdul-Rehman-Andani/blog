import { createSlice, createAsyncThunck } from "@reduxjs/toolkit";

const signIn = createAsyncThunck('signIn', async () => { 
    // const user = await 
});

const initialState = {
    data: {}
}

const signSlice = createSlice({
    name: "signin",
    initialState,
    extraReducers : {}
});