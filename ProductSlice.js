import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
    name: "products",
    initialState: {
        items: [
            {
                id: 1,
                name: "flower vase",
                price: 29.99,
                image: "https://m.media-amazon.com/images/I/81NLPO1iUQL._SX679_.jpg",
                description: "A beautiful flower vase to decorate your home."
            },
            {
                id: 2,
                name: "table lamp",
                price: 49.99,
                image: "https://m.media-amazon.com/images/I/61OGkOifVoL._SX679_.jpg",
                description: "A stylish table lamp to brighten up your space."
            },
            {
                id: 3,
                name: "wall art",
                price: 19.99,
                image: "https://m.media-amazon.com/images/I/61jPI3VnaML._SX679_.jpg",
                description: "A art will give you some good vibes."
            }
        ]
    },
    reducers: {}
});
export default productSlice.reducer;