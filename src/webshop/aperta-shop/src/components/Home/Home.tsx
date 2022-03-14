import React from "react";
import Carousel from "react-material-ui-carousel";
import "./styles.css";
import useStyles from "./styles.js";
import { useNavigate } from "react-router-dom";

//import Product from '../Products/Product/Product';
import Product from './Product/Product';

export default function Home({ products, onAddToCart } : {products:any, onAddToCart:any}) {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);
  const navigate = useNavigate();
  if (!products.length) return <p>Loading...</p>;

  const handleChange = (cur: number, prev: number) => {
    setIndex(cur);
  };

  const goToAbout = () => {
    navigate("/about");
  }
  
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className="my-carousel__wrapper">
          <Carousel
            index={index}
            onChange={handleChange}
            interval={5000}
            animation="fade"
            timeout={{
              appear: 350,
              enter: 350,
              exit:100
            }}
            indicators={false}
            stopAutoPlayOnHover={false}
            className="my-carousel"
            navButtonsAlwaysInvisible={true}
          >
            {products.map((product:any) => (
              <Product key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </Carousel>
          <div className="my-carousel__control">
            {products.map((product:any, p:any) => (
              <div
                className="control_Button"
                onClick={() => setIndex(p)}
                style={{
                  background: p === index ? "#B90504" : "#FFEDED"
                }}
                key={product.id}
              ></div>
            ))}
          </div>
        </div>
        <div className="about-section">
          <div className="about-content">
            <div className="about-title">About APERTA</div>
            <div className="about-text">
            APERTA helps to solve the common problems faced in everyday life when entering your garage. 
            The garage transmitter has been misplaced, the battery has gone flat, or you want to enter 
            the garage without your car.
            Until now, you had to buy and install several systems for this, but APERTA combines number 
            plate recognition with a number field, as well as the possibility of using RFID chips. 
            </div>
            <div className="about-button">
              <div className="about-btn-content" onClick={goToAbout}>
                <span className="aboutn-btn-text">Find out more</span>
                <span className="icon-arrow-right">&#8594;</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }


