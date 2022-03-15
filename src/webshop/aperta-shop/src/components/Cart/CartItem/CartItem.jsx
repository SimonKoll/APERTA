import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import "./styles.css";

import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();

  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <Card className={classes.Croot}>
      <CardMedia image={item.image.url} alt={item.name} className={classes.Cmedia} />
      <CardContent className={classes.CcardContent}>
        <Typography variant="h6" style={{ fontWeight: 600 }}>{item.name}</Typography>
        <Typography variant="h6">{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.CcardActions}>
        <div className={classes.Cbuttons}>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
        </div>
        <div className="rmv-button">
          <div className="rmv-btn-content" onClick={() => handleRemoveFromCart(item.id)}>
            <span className="rmv-btn-text">Remove</span>
          </div>
        </div>
       
      </CardActions>
    </Card>
  );
};

export default CartItem;
