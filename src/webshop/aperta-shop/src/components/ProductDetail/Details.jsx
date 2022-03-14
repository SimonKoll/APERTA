import React, { useState, useEffect } from 'react';
import { commerce } from '../../lib/commerce';
import "./styles.css";
import useStyles from './styles';
import { IconButton, Typography } from "@material-ui/core";
import { AddShoppingCart } from '@material-ui/icons';

const Details = ({ onAddToCart }) => {
    const classes = useStyles();
    const url_id = window.location.pathname.split("/");
    const pID = url_id[2];
    const [detail, setDetail] = useState({});
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
            <div className='wrapper'>
                <div className='pImg'>
                <img className="img" src={detail.src} alt="Product-Image" />
                </div>
                <div className='text'>
                    <span>
                    <Typography>
                       {detail.name}
                    </Typography>

                    <Typography>
                       {detail.price}
                    </Typography>
                    </span>
                    <span>
                    <Typography dangerouslySetInnerHTML={{ __html: detail.description }} variant="body2" color="textSecondary" component="p" />
                    </span>
                       
                </div>
                <div className='cartButton'>
                <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
                    <AddShoppingCart />
                </IconButton>    
                </div>
            </div>
        </main>
    )
};

export default Details;