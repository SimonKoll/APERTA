import React from 'react';
import "./styles.css";
import useStyles from './styles';

const About = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <div className="error">
                <h1 className="error-text">About is currently under construction!</h1>
            </div>
        </main>
    )
  };
  
  export default About;