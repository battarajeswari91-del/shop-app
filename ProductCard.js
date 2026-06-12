import Button from './Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/CartSlice';
import { addToWishlist } from '../store/slices/WishlistSlice';

function ProductCard({ id, name, price, image, description, onClick, viewMode }) {
    const dispatch = useDispatch();

    const handleAddToCart = (e) => {
        e.stopPropagation();
        dispatch(addToCart({ id, name, price, image, description }));
    };

    const handleAddToWishlist = (e) => {
        e.stopPropagation();
        dispatch(addToWishlist({ id, name, price, image, description }));
    };

    return (
        <div className={`product-card ${viewMode}`} onClick={onClick}>
            <img src={image} alt={name} />
            <div className="product-details">
                <h3>{name}</h3>
                <p className="price"> price: ${price.toFixed(2)}</p>
                <p>{description}</p>
                <div className="card-actions">
                    <Button type="button" text="Add to Cart" className="add-to-cart-btn" onClick={handleAddToCart} />
                    <Button type="button" text="Add to Wishlist" className="wishlist-btn" onClick={handleAddToWishlist} />
                </div>
            </div>
        </div>
    )
}
export default ProductCard;