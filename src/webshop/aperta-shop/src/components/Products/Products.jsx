import React from 'react';
import { Typography, Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';
import "./styles.css";

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();
  const url_title = window.location.pathname.split("/");
  const uTitle = url_title[1].charAt(0).toUpperCase() + url_title[1].slice(1);

  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar}/>
      <div className='p-wrapper'>
       <div className='page-title'>
          <Typography className={classes.pTitle} variant="h5" style={{ fontWeight: 600, margin: '0 !important' }} gutterBottom>
            {uTitle}:
          </Typography>
        </div>
        <div className='content-wrapper'>
          <Grid container justifyContent="center" direction="row" spacing={10}>
            {products.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                  <Product product={product} onAddToCart={onAddToCart} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </main>
  );
};

export default Products;

