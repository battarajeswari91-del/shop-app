import { useSelector } from "react-redux";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
function ProductList() {
    const [viewMode, setViewMode] = useState('grid');
    const items = useSelector((state) => state.products.items);
    return (
        <div className="product-list-page">
            <div className="view-toggle">
                <button className={viewMode === 'grid' ? 'active' : ''} onClick={() => setViewMode('grid')}>Grid View</button>
                <button className={viewMode === 'list' ? 'active' : ''} onClick={() => setViewMode('list')}>List View</button>
            </div>
            <div className={`product-list ${viewMode}`}>
                {items.map((item) => (
                    <ProductCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                        description={item.description}
                        viewMode={viewMode}
                    />
                ))}
            </div>
        </div>
    )
}
export default ProductList;