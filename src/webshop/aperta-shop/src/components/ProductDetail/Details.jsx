import React, { useState, useEffect } from 'react';
import { commerce } from '../../lib/commerce';
import "./styles.css";
import useStyles from './styles';
import { Typography } from "@material-ui/core";

const createMarkup = (text) => {
    return { __html: text };
  };

const Details = () => {
    const classes = useStyles();
    const url_id = window.location.pathname.split("/");
    const pID = url_id[2];
    const [detail, setDetail] = useState({});

    const fetchProduct = async (ID) => {
        //const { data: Product } = await commerce.products.retrieve(pID);
        //setProduct(Product);
        //console.log("details: " + Product);
        //await commerce.products.retrieve(pID).then((Product) => setProduct(Product));
        //const { data } = await commerce.products.retrieve(ID);
        //setDetail(data);

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
        console.log(pID);
        fetchProduct(pID);
    }, []);

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <h3>Detail-View</h3>
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
                       {detail.description}
                    </Typography>
                    <Typography>
                       {detail.price}
                    </Typography>
                    </span>
                </div>
            </div>
        </main>
    )
};

export default Details;