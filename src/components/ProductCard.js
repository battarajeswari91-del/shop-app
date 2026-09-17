import Button from './Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/CartSlice';
import { addToWishlist } from '../store/slices/WishlistSlice';

function ProductCard(item) {
    const dispatch = useDispatch();

    const handleAddToCart = (e) => {
        e.stopPropagation();
        dispatch(addToCart(item));
    };

    const handleAddToWishlist = (e) => {
        e.stopPropagation();
        dispatch(addToWishlist(item));
    };
    return (
        <div className={`product-card ${item.viewMode}`} onClick={item.onClick}>
            <img src={item.image} alt={item.name} />
            <div className="product-details">
                <h3>{item.name}</h3>
                <p className="price"> price: ${item.price.toFixed(2)}</p>
                <p>{item.description}</p>
                <div className="card-actions">
                    <Button type="button" text="Add to Cart" className="add-to-cart-btn" onClick={handleAddToCart} />
                    <Button type="button" text="Add to Wishlist" className="wishlist-btn" onClick={handleAddToWishlist} />
                </div>
            </div>
        </div>
    )
}
export default ProductCard;