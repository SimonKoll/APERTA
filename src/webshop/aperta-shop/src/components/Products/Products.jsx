import React from 'react';
import { Typography, Grid, Container, DialogTitle } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Product from './Product/Product';
import useStyles from './styles';
import "./styles.css";

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar}/>
      <div>
        <h1 className={classes.pTitle} variant="h5" style={{ fontWeight: 600, margin: '0 !important' }} gutterBottom>Products:</h1>
      </div>
      <div>
        <Grid className={classes.gridContent} container alignItems="center" justify="center" direction="row" spacing={2}>
          {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </div>
    </main>
  );
};

export default Products;

