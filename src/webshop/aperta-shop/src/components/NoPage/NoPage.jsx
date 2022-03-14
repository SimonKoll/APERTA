import React from 'react';
import "./styles.css";
import useStyles from './styles';

const NoPage = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <div className="error">
                <h1 className="error-text">Error 404: Page not found!</h1>
            </div>
        </main>
    )
  };
  
  export default NoPage;