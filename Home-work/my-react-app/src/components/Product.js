import React from 'react';

import { Outlet, Link } from "react-router-dom";


export default function Product() {
 
    return (
        <div>
        <h1>Product List</h1>
        <Link to="/products/1">Product 1</Link>
        <Link to="/products/2">Product 2</Link>
        <Link to="/products/3">Product 3</Link>
      </div>
    );
}
