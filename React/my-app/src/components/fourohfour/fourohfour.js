import React from "react";
import {useRouteMatch} from 'react-router-dom';
 
import "./fourohFour.css";
 
const Fourohfour = () => {
    const {url}=useRouteMatch();
    return (
  <div className="four-oh-four">
    <h2>404</h2>
    <p>{url} route doesnot exist.</p>
  </div>
  );
};
 
export default Fourohfour;

