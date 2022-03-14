import React from "react";
import Carousel from "react-material-ui-carousel";
import "./styles.css";
import useStyles from "./styles.js";
import { useNavigate } from "react-router-dom";

//import Product from '../Products/Product/Product';
import Product from './Product/Product';

function Item({ item }: { item: { description: string } }) {
  return (
    <div style={{ width: "100%", height: "100%" }}>{item.description}</div>
  );
}

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
              exit:0
            }}
            indicators={false}
            stopAutoPlayOnHover={false}
            className="my-carousel"
            navButtonsAlwaysInvisible={true}
          >
            {products.map((product:any) => (
              <Product product={product} onAddToCart={onAddToCart} />
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
              ></div>
            ))}
          </div>
        </div>
        <div className="about-section">
          <div className="about-content">
            <div className="about-title">About APERTA</div>
            <div className="about-text">
              APERTA is a smart garage-door system, which allows you to open your
              garage-door via a licenseplate-recognition.
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


