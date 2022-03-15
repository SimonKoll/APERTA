import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';
import useStyles from './styles';
import "./styles.css";

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();

  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart,
      <Link className={classes.link} to="/">start adding some</Link>!
    </Typography>
  );

  if (!cart.line_items) return 'Loading';

  const renderCart = () => (
    <>
      <div className='c-content-wrapper'>
          <Grid container justifyContent="center" direction="row" spacing={6}>
            {cart.line_items.map((lineItem) => (
              <Grid key={lineItem.id} item xs={12} sm={6} md={4} lg={3}>
                  <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
              </Grid>
            ))}
          </Grid>
      </div>
      <div className={classes.cardDetails}>
        <Typography variant="h5" style={{ fontWeight: 600 }}>Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <div className="empty-button">
            <div className="empty-btn-content" onClick={handleEmptyCart}>
              <span className="empty-btn-text">Empty</span>
            </div>
          </div>
          <div className="checkout-button">
            <div className="checkout-btn-content" component={Link} to="/checkout">
              <span className="checkout-btn-text">Checkout</span>
            </div>
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
            <Typography className={classes.title} variant="h5" style={{ fontWeight: 600 }} gutterBottom>Your Shopping Cart:</Typography>
          </div>
          <div className="cart-content-wrapper">
            { !cart.line_items.length ? renderEmptyCart() : renderCart() }
          </div>
      </div>
    </main>
  );
};

export default Cart;
