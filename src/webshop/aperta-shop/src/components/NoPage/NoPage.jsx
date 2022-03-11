import React from 'react';

import useStyles from './styles';

const NoPage = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <h1> Page ist noch in arbeit!</h1>
        </main>
    )
  };
  
  export default NoPage;