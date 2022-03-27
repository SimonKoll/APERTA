import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import "./styles.css";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <div className="card">
       <Link className="product-link" to={`/detail/${product.id}`}>
       <img className="card__img" src={product.image.url} alt={product.name} />
       </Link>

       <Link className="product-link" to={`/detail/${product.id}`}>
        <div className="card__banner">
          <h2 className="card__title">{product.name}</h2>
          <h3 className="card__price">€{product.price.formatted}</h3>
        </div>
        <div className="card__content" dangerouslySetInnerHTML={{ __html: product.description }} />
      </Link>
      <div className="buy-btn">
            <div className="buyBTN-content" onClick={handleAddToCart}>
              <span className="buyBTN-text">Add to Cart</span>
                <span className="addShoppingC"><AddShoppingCart className={classes.ascIcon} /></span>
            </div>
        </div>
    </div>

    /*
    <Card className={classes.root}>
    <Link className="product-link" to={`/detail/${product.id}`}>
      <CardMedia className={classes.media} image={product.image.url} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h6" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            €{product.price.formatted}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      </Link>
      <CardActions disableSpacing className={classes.cardActions}>
        <div className="buy-btn">
            <div className="buyBTN-content" onClick={handleAddToCart}>
              <span className="buyBTN-text">Add to Cart</span>
                <span className="addShoppingC"><AddShoppingCart className={classes.ascIcon} /></span>
            </div>
        </div>
      </CardActions>
    </Card>
    */
  );
};

export default Product;

