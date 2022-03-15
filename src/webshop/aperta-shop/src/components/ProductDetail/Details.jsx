import React, { useState, useEffect } from 'react';
import { commerce } from '../../lib/commerce';
import "./styles.css";
import useStyles from './styles';
import { Typography } from "@material-ui/core";
import { AddShoppingCart } from '@material-ui/icons';
import Spinner from "../Spinner/spinner";

const Details = ({ onAddToCart }) => {
    const classes = useStyles();
    const url_id = window.location.pathname.split("/");
    const pID = url_id[2];
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(true);
    const handleAddToCart = () => onAddToCart(detail.ID, 1);

    const fetchProduct = async (ID) => {
        const { name, price, image, quantity, description } = await commerce.products.retrieve(ID);

        setDetail({
            ID,
            name,
            quantity,
            description,
            src: image.url,
            price: price.formatted_with_symbol,
          });
    }

    useEffect(() => {
        fetchProduct(pID);
    }, []);

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <div className="image-section">
                <div className='product-image'>
                    <img className="product-img" onLoad={() => { setLoading(false); }} src={detail.src} alt="Product-Image" />
                </div>
            </div>
            
            <div className="content-section">
                <div className="product-content">
                    <div className="content-title">
                        <Typography className="product-title" style={{ fontWeight:"700", fontSize: "1.4rem" }}>
                            {detail.name}
                        </Typography>
                    </div>
                    <div className="content-price">
                        <Typography className="product-price" style={{ fontWeight:"600", fontSize: "1.2rem" }}>
                            {detail.price}
                        </Typography>
                    </div>
                    <div className="content-description">
                        <Typography className="product-text" dangerouslySetInnerHTML={{ __html: detail.description }} />
                    </div>
                    <div className="buy-button">
                        <div className="buy-btn-content" onClick={handleAddToCart}>
                            <span className="buy-btn-text">Add to Cart</span>
                            <span className="asc"><AddShoppingCart /></span>
                        </div>
                     </div>
                </div>
            </div>
        {loading && <Spinner />}
        </main>
    )
};

export default Details;