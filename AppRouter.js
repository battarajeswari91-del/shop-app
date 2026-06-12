import { useEffect } from "react";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Routes, Route } from "react-router-dom";
import ProductList from "../pages/ProductList";
import CartPage from "../pages/CartPage";
import WishlistPage from "../pages/WishListPage";
import { useSelector } from "react-redux";
import CheckoutPage from "../pages/CheckoutPage";
function AppRouter() {
    const cart = useSelector((state) => state.cart.items);
    const wishlist = useSelector((state) => state.wishlist.items);

    useEffect(() => {
        console.log("Cart updated:", cart);
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        console.log("Wishlist updated:", wishlist);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    return (
        <div className="app-wrapper">
            <Header />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/productList" element={<ProductList />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/wishlist" element={<WishlistPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}
export default AppRouter;