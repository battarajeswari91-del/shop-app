import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/ProductSlice';
import cartReducer from './slices/CartSlice';
import wishlistReducer from './slices/WishlistSlice';

const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        wishlist: wishlistReducer,
    }
});
export default store;