import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../store/slices/CartSlice';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

function CartPage() {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleQuantityChange = (id, newQuantity) => {
        if (newQuantity > 0) {
            dispatch(updateQuantity({ id, quantity: newQuantity }));
        }
    };

    return (
        <div className="cart-page container">
            <h1>Your Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p className="empty-message">Your cart is currently empty.</p>
            ) : (
                <div className="cart-content">
                    <div className="cart-list">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item-row">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-info">
                                    <h3>{item.name}</h3>
                                    <p className="price">${item.price.toFixed(2)}</p>
                                    <div className="quantity-controls">
                                        <Button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</Button>
                                        <span className="quantity">{item.quantity}</span>
                                        <Button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</Button>
                                    </div>
                                    <Button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>Remove</Button>
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
        </div>
    );
}

export default CartPage;