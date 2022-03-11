import React from "react";
import Carousel from "react-material-ui-carousel";
import "./styles.css";
import useStyles from "./styles.js";

function Item({ item }: { item: { description: string } }) {
  return (
    <div style={{ width: "100%", height: "100%" }}>{item.description}</div>
  );
}

export default function Home({ products, onAddToCart } : {products:any, onAddToCart:any}) {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);
  if (!products.length) return <p>Loading...</p>;

  var items = [
    {
      name: "Random Name #1",
      description: "First Product"
    },
    {
      name: "Random Name #2",
      description: "Zweites Produkt"
    },
    {
      name: "Random Name #3",
      description: "Third Project"
    }
  ];

  const handleChange = (cur: number, prev: number) => {
    setIndex(cur);
  };
  
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className="my-carousel__wrapper">
          <Carousel
            index={index}
            onChange={handleChange}
            interval={5000}
            animation="slide"
            indicators={false}
            stopAutoPlayOnHover
            swipe
            className="my-carousel"
          >
            {items.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
          <div className="my-carousel__control">
            {items.map((item, i) => (
              <div
                className="control_Button"
                onClick={() => setIndex(i)}
                style={{
                  background: i === index ? "#B90504" : "#FFEDED"
                }}
              ></div>
            ))}
          </div>
        </div>
        <div className="about-section">
          <div className="about-content">
            <div className="about-title">About Aperta</div>
            <div className="about-text">
              Aperta is a smart garage-door system, which allows you to open your
              garage-door via a licenseplate-recognition.
            </div>
            <div className="about-button">
              <div className="about-btn-content">
                <span className="aboutn-btn-text">Find out more</span>
                <span className="icon-arrow-right">&#8594;</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }


