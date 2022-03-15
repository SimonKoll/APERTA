import React from 'react';
import { CircularProgress } from "@material-ui/core";
import "./styles.css";

const Spinner = () => (
  <div className="spinner">
    <CircularProgress />
  </div>
);

export default Spinner;