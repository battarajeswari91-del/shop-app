import { createSlice } from "@reduxjs/toolkit";
const savedWishlist = localStorage.getItem("wishlist");
const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        items: savedWishlist ? JSON.parse(savedWishlist) : [],
    },
    reducers: {
        addToWishlist: (state, action) => {
            const exists = state.items.find(item => item.id === action.payload.id); // check if item already exists in wishlist
            if (!exists) {
                state.items.push(action.payload);
            }
        },
        removeFromWishlist: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        }
    }
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;