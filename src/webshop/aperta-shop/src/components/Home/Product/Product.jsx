import React from 'react';
import "./styles.css";

const Product =({ product, onAddToCart }) => {
    const handleAddToCart = () => onAddToCart(product.id, 1);

    return (
        <div className="wrapper">
            <div className="media">
                <img className="product-image" src={product.image.url} alt={product.name} />
            </div>
            <div className="textAndButtonWrapper">
                <div className="titlePriceWrapper">
                    <div className="title">
                        <span>{product.name}</span>
                    </div>
                    <div className="price">
                        €{product.price.formatted}
                    </div>
                </div>
                <div className="addToCartBTN" onClick={handleAddToCart}>
                    <div className="BTN-Content">
                        <span className="atcBtn-text">Buy</span>
                        <span className="atcBtn-arrowRight">&#8594;</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;