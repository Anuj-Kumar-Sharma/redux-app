import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    status: 'idle',
    items: [],
};

export const fetchProducts = createAsyncThunk(
    "productsSlice/fetchProducts",
    async (args, thunkAPI) => {
        const response = await axios.get("https://dummyjson.com/products");
        const products = response.data.products;
        // const count = thunkAPI.getState().counter.count;
        // thunkAPI.dispatch(initProducts)
        return products;
    }
);

const productsSlice = createSlice({
    name: "productsSlice",
    initialState,
    reducers: {
        initProducts(state, action) {
            console.log(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = 'fulfilled'
        }).addCase(fetchProducts.pending, (state) => {
          state.status = 'loading'
        })
    },
});

export const { initProducts } = productsSlice.actions;

export default productsSlice.reducer;
