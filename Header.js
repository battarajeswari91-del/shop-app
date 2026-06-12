import Button from './Button';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    const navigate = useNavigate();

    const cart = useSelector((state) => state.cart.items);
    const wishlist = useSelector((state) => state.wishlist.items);

    return (
        <header className="header-container">
            <div className="Header">
                OnlineShopping
            </div>
            <div className="header-actions">
                <Link to="/cart" className="cart-button">
                    Cart ({cart.length})
                </Link>
                <Link to="/wishlist" className="wish-button">
                    Wishlist ({wishlist.length})
                </Link>
                <Button className="login-button" onClick={() => navigate('/login')}>
                    Login
                </Button>
            </div>
        </header>
    )
}
export default Header;