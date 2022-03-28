import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';
import useStyles from './styles';
import "./styles.css";

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();

  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart,
      <Link className={classes.link} to="/"> start adding some</Link>!
    </Typography>
  );

  if (!cart.line_items) return 'Loading';

  const renderCart = () => (
    <>
      <div className="c-content-wrapper">
          <div className="product-grid">
            {cart.line_items.map((lineItem) => (
              <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
            ))}
          </div>
      </div>
      <div className="details-wrapper">
        <div className='subtotalText'>Subtotal: {cart.subtotal.formatted_with_symbol}</div>
        <div className="button-wrapper">
          <div className="empty-button">
            <div className="empty-btn-content" onClick={handleEmptyCart}>
              <span className="empty-btn-text">Empty</span>
            </div>
          </div>
          <div className="checkout-button">
            <Link to="/checkout" color='#fff !important'>
              <div className="checkout-btn-content">
                <span className="checkout-btn-text">Checkout</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <main className={classes.mainCartContent}>
      <div className={classes.cartToolbar} />
      <div className="c-wrapper">
          <div className="cart-title">
            <Typography className={classes.title} variant="h5" style={{ fontWeight: 600, marginBottom: '1rem' }} gutterBottom>Your Shopping Cart:</Typography>
          </div>
          <div className="cart-content-wrapper">
            { !cart.line_items.length ? renderEmptyCart() : renderCart() }
          </div>
      </div>
    </main>
  );
};

export default Cart;
