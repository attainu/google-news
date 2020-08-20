import React from "react";
import { Link } from 'react-router-dom';

import './css/custom404.css'
const Custom404Page = () => {
 
  return (
    <div className="page_404">
      <h1 className = "error_404">ERROR 404</h1>
      <p className ="para">
        GO <Link to= "/" style={{textDecorationLine:"underline",fontSize:"2rem", color:"#dff9fb"}}>HOME</Link> YOU'RE DRUNK
      </p>
    </div>
  );
};

export default Custom404Page;
