import React from 'react';
import "./styles.css";
import { Link } from 'react-router-dom';

import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();

  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <div className="card">
      <Link className="product-link" to={`/detail/${item.product_id}`}>
        <img className="card__img" src={item.image.url} alt={item.name} />
      </Link>

      <Link className="product-link" to={`/detail/${item.product_id}`}>
        <div className="card__banner">
          <h2 className="card__title">{item.name}</h2>
          <h3 className="card__price">€{item.price.formatted}</h3>
        </div>
      </Link>
      <div className="buttons-wrapper">
        <div className="quantitityButtonsWrapper">
          <div className="minusButton" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>
            -
          </div>
          <div className="quantity">&nbsp;{item.quantity}&nbsp;</div>
          <div className="plusButton" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>
            +
          </div>
        </div>
        <div className="rmv-button">
          <div className="rmv-btn-content" onClick={() => handleRemoveFromCart(item.id)}>
            <span className="rmv-btn-text">Remove</span>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CartItem;
