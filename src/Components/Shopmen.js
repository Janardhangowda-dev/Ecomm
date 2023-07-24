import React from 'react';
import './men.css';

import mb1 from './menbanners/mb1.jpg'
import mb2 from './menbanners/mb2.jpg'

function Shopmen() {
  return (
    <div class="container">
    <div class="items">
    <div class="img img1"><img src={mb1} alt="mb1"/></div>
             <div class="name"></div>
             <div class="price">5000</div>
             <button onClick={handleAddToCart}>Add to Cart</button>
           &nbsp; &nbsp;
             <button onClick={handleBuyNow}>Buy Now</button>
             </div>
             </div>
             
  )
}

export default Shopmen