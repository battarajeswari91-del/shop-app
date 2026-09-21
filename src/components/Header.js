import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    const navigate = useNavigate();

    const cart = useSelector((state) => state.cart.items);
    const wishlist = useSelector((state) => state.wishlist.items);

    return (
        <header className="Header">

            {/* Logo */}
            <div className="logo">
                <Link to="/">MyShop</Link>
            </div>

            {/* Navigation */}
            <nav>
                <Link to="/">Home</Link>


                <button
                    className="cart-button"
                    onClick={() => navigate('/cart')}
                >
                    🛒 Cart ({cart.length})
                </button>

                <button
                    className="wish-button"
                    onClick={() => navigate('/wishlist')}
                >
                    ♡ Wishlist ({wishlist.length})
                </button>

                <button
                    className="login-button"
                    onClick={() => navigate('/login')}
                >
                    Login
                </button>
            </nav>

        </header>
    );
}

export default Header;