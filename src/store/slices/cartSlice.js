import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart(state, action) {
            const productId = action.payload.id;
            const cartItems = state.items;
            const item = cartItems.find((item) => item.id === productId);
            if (item) {
                item.quantity += 1;
            } else {
                const product = { ...action.payload, quantity: 1 };
                cartItems.push(product);
            }
        },
        incrementQuantity(state, action) {
            const productId = action.payload.id;
            const cartItems = state.items;
            const item = cartItems.find((item) => item.id === productId);
            item.quantity++;
        },
        decrementQuantity(state, action) {
            const productId = action.payload.id;
            const cartItems = state.items;
            const item = cartItems.find((item) => item.id === productId);
            item.quantity -= 1;
            state.items = cartItems.filter((item) => item.quantity > 0);
        },
    },
});

export const { addToCart, incrementQuantity, decrementQuantity } =
    cartSlice.actions;

export default cartSlice.reducer;
