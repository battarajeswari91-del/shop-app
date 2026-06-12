import { useSelector } from "react-redux";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
function ProductList() {
    const [viewMode, setViewMode] = useState('grid');
    const products = useSelector((state) => state.products.items);
    return (
        <div className="product-list-page">
            <div className="view-toggle">
                <button className={viewMode === 'grid' ? 'active' : ''} onClick={() => setViewMode('grid')}>Grid View</button>
                <button className={viewMode === 'list' ? 'active' : ''} onClick={() => setViewMode('list')}>List View</button>
            </div>
            <div className={`product-list ${viewMode}`}>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        image={product.image}
                        price={product.price}
                        description={product.description}
                        viewMode={viewMode}
                    />
                ))}
            </div>
        </div>
    )
}
export default ProductList;