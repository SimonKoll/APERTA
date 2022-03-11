import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar, Products, Cart, Checkout, Home, NoPage } from './components';
import { commerce } from './lib/commerce';

const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [pproducts, setPproducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  /* const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    //get Data from Categorie 'Components'
    commerce.products.list({category_slug: ['components'],}).then(response => console.log(response));

    setProducts(data);
  }; */
  
  const fetchComponents = async() => {
    const { data: CProducts } = await commerce.products.list({category_slug: ['components'],});

    setProducts(CProducts);
  }

   const fetchPackages = async() => {
    const { data: PProducts } = await commerce.products.list({category_slug: ['packages'],});

    setPproducts(PProducts);
  } 

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    // fetchProducts();
    fetchComponents();
    fetchPackages();
    fetchCart();
    
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle} />
        <Routes>
          <Route path="/components" element={<Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />} />
          <Route path="/packages" element={<Products products={pproducts} onAddToCart={handleAddToCart} handleUpdateCartQty />} />
          <Route path="/home" element={<Home products={pproducts} onAddToCart={handleAddToCart} handleUpdateCartQty/>} />
          <Route path="/cart" element={<Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} /> } />
          <Route path="/checkout" exact element={ <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} /> } />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
