import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/CartSlice';
import { removeFromWishlist } from '../store/slices/WishlistSlice';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

function WishlistPage() {
    const wishlistItems = useSelector((state) => state.wishlist.items);
    const dispatch = useDispatch();
    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };
    const navigate = useNavigate();
    const total = wishlistItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="wishlist-page container">
            <h1>Your Wishlist</h1>
            {wishlistItems.length === 0 ? (
                <p className="empty-message">Your wishlist is empty.</p>
            ) : (
                <div className="wishlist-content">
                    <div className="wishlist-grid">
                        {wishlistItems.map((item) => (
                            <div key={item.id} className="wishlist-item-card">
                                <img src={item.image} alt={item.name} />
                                <div className="wishlist-item-details">
                                    <h3>{item.name}</h3>
                                    <p className="price">${item.price.toFixed(2)}</p>
                                    <div className="wishlist-actions">
                                        <Button onClick={() => {
                                            handleAddToCart(item);
                                            alert("Item added to cart");
                                        }}>Add to Cart</Button>
                                        <Button className="remove-btn" onClick={() => dispatch(removeFromWishlist(item.id))}>Remove</Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <h3>Total: ${total.toFixed(2)}</h3>
                        <Button className="checkout-btn" onClick={() => navigate('/checkout')}>Proceed to Checkout</Button>
                    </div>
                </div>
            )}
        </div >
    );
}

export default WishlistPage;
