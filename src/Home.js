import React from 'react'
import './Home.css'
import banner1 from './sliders/banner1.jpg'
import banner2 from './sliders/banner2.jpg'
import banner3 from './sliders/banner3.jpg'
import banner4 from './sliders/banner4.jpg'
import jpg1 from './folder 1/jpg1.jpg'
import img2 from './folder 1/img2.jpg'
import img3 from './folder 1/img3.jpg'
import img4 from './folder 1/img4.jpg'
import img5 from './folder 1/img5.jpg'
import img6 from './folder 1/img6.jpg'
import img7 from './folder 1/img7.jpg'
import img8 from './folder 1/img8.jpg'
import img9 from './folder 1/img9.jpg'
import img10 from './folder 1/img10.jpg'
import tb1 from './tb/tb1.png'
import tb2 from './tb/tb2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Twobox from './Components/Twobox'
import Threebox from './Components/Threebox'






function Home() {
  const handleBuyNow = () => {
    // Logic to initiate the checkout process
  };
  const handleAddToCart = () => {
    // Logic to add the product to the cart
  };
  return (
    <div>
    <section>
     <div class="section1">
     <div class="img-slider">
             <img src={banner1} alt="banner1"></img>
             <img src={banner2} alt="banner1"></img>
             <img src={banner3} alt="banner1"></img>
             <img src={banner4} alt="banner1"></img>
            
         </div>
         <Link to='./Men'>
          <button> sarees</button>
        </Link>
     </div>
     
   
    <div class="section2">
     <h1>best sellers</h1>
     <button>brouse all</button>
     
    <div class="container">
    <div class="items">
    <div class="img img1"><img src={jpg1} alt="jpg1"/></div>
             <div class="name"></div>
             <div class="price">5000</div>
             <button onClick={handleAddToCart}>Add to Cart</button>
           &nbsp; &nbsp;
             <button onClick={handleBuyNow}>Buy Now</button>
             
             
 </div>
  
    <div class="items">
             <div class="img img2"><img src={img2} alt="img2"/></div>
             <div class="name">RED LIGHT GREEN SILK SAREE</div>
             <div class="price">6000</div>
             <div class="info">red saree in ethnic fashion</div>
             <button onClick={handleAddToCart}>Add to Cart</button>
           &nbsp; &nbsp;
             <button onClick={handleBuyNow}>Buy Now</button>
           </div>
 
           <div class="items">
             <div class="img img3"><img src={img3} alt="img3"/></div>
             <div class="name">Blue Silk WITH  RED touch</div>
             <div class="price">7500</div>
             <div class="info">Women's Hand block printed cotton</div>
             <br/>
             <button onClick={handleAddToCart}>Add to Cart</button>
           &nbsp; &nbsp;
             <button onClick={handleBuyNow}>Buy Now</button>                             
           </div>
           <div class="items">
             <div class="img img1"><img src={img4} alt="img4"/></div>
             <div class="name">GREY COTT</div>
             <div class="price">8500</div>
             <div class="info">Cement grey colour with yellow red border </div>
             <button onClick={handleAddToCart}>Add to Cart</button>
           &nbsp; &nbsp;
             <button onClick={handleBuyNow}>Buy Now</button>
           </div>
           <div class="items">
             <div class="img img1"><img src={img5} alt="img5"/></div>
             <div class="name"></div>
             <div class="price">9700</div>
             <div class="info"></div>
             <button onClick={handleAddToCart}>Add to Cart</button>
           &nbsp; &nbsp;
             <button onClick={handleBuyNow}>Buy Now</button>
           </div>
           <div class="items">
             <div class="img img1"><img src={img6} alt="img5"/></div>
             <div class="name"></div>
             <div class="price">900</div>
             <div class="info"></div>
             <button onClick={handleAddToCart}>Add to Cart</button>
           &nbsp; &nbsp;
             <button onClick={handleBuyNow}>Buy Now</button>
           </div>
           <div class="items">
             <div class="img img1"><img src={img7} alt="img5"/></div>
             <div class="name"></div>
             <div class="price">1500</div>
             <div class="info">.</div>
             <button onClick={handleAddToCart}>Add to Cart</button>
           &nbsp; &nbsp;
             <button onClick={handleBuyNow}>Buy Now</button>
           </div>
           <div class="items">
             <div class="img img1"><img src={img8} alt="img5"/></div>
             <div class="name"></div>
             <div class="price">2300</div>
             <div class="info"></div>
             <button onClick={handleAddToCart}>Add to Cart</button>
           &nbsp; &nbsp;
             <button onClick={handleBuyNow}>Buy Now</button>
           </div>
           <div class="items">
             <div class="img img1"><img src={img9} alt="img5"/></div>
             <div class="name"></div>
             <div class="price">1500</div>
             <div class="info">.</div>
             <button onClick={handleAddToCart}>Add to Cart</button>
           &nbsp; &nbsp;
             <button onClick={handleBuyNow}>Buy Now</button>
           </div>
           <div class="items">
             <div class="img img1"><img src={img10} alt="img5"/></div>
             <div class="name">
             <Link to='./Men'>
         
        </Link>
             <a href='./Red'>example link</a>.
             </div>
         
             <div class="price">1500</div>
             <div class="info">.</div>
             <button onClick={handleAddToCart}>Add to Cart</button>
           &nbsp; &nbsp;
             <button onClick={handleBuyNow}>Buy Now</button>
           </div>
           </div>
    </div>
    
    </section>
    <div> 
      <Twobox />
    </div>
   
    <div> 
      <Threebox />
    </div>


    <div className="newsletter-container">
      <div className="rectangle">
        <span className="subscribe-text">Subscribe to Newsletter</span>
        <div className="email-container">
          <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
          <span className="email-text">Email Address</span>
        </div>
      </div>
    </div>
    





    </div>
  )
}

export default Home