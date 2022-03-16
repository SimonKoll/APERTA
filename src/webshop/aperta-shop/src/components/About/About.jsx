import React from 'react';
import "./styles.css";
import useStyles from './styles';

const About = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <div className="about-wrapper">
                <div className="top-wrapper">
                    <span className="about-title">About APERTA</span>
                    <div className="about-content">
                        <span className="about-desc">
                        APERTA solves a problem that is familiar to everyday life. The garage transmitter has been misplaced, the battery has gone 
    flat, or you want to enter the garage without your car. Until now, you had to buy and install several systems for this. APERTA 
    combines number plate recognition with a traditional number field, as well as the possibility of using RFID chips. The 
    number plate recognition takes a picture of the surroundings, searches for the number plate on it, and if it has been added 
    beforehand via the user interface, the garage door is activated and you can enter.
                        </span>
                    </div>
                    <div className="about-button">
                        <div className="about-btn-content" >
                            <span className="aboutn-btn-text">View our Products</span>
                            <span className="icon-arrow-right">&#8594;</span>
                        </div>
                    </div>
                </div>

                <hr className="about-hr" />

                <div className="bottom-wrapper">
                    <div className="bottom-title">
                        <span className="bottom-title-text">How it works</span>
                    </div>
                    <div className="bottom-subtitle">
                        <span className="bottom-subtitle-text">
                            Watch this quick visualisation to see how APERTA works:
                        </span>
                    </div>
                    <div className="bottom-video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/KrHYiyQgCX8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </main>
    )
  };
  
  export default About;