import React from 'react';
import { Typography, Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';
import "./styles.css";

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();
  const url_title = window.location.pathname.split("/");
  const uTitle = url_title[1].charAt(0).toUpperCase() + url_title[1].slice(1);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar}/>
        <div className='content-wrapper'>
          <div className='content-header'>
            <Typography variant="h5" style={{ fontWeight: 600, marginLeft: 10 }} gutterBottom>
              {uTitle}
            </Typography>
          </div>
          
          <div className="product-grid">
            {products.map(product => (
              <Product key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
    </main>
  );
};

export default Products;

