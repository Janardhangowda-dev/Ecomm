import React, { useState } from 'react';
import './Cart.css';
import img1 from '../Components/imges/img1.jpg';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




function App() {
  const [quantity, setQuantity] = useState(1);
  const price = 16995;
  const discount = 11330;
  const productId = "yourProductId"; // Replace "yourProductId" with the actual ID of the product

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);

    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleProductFormSubmit = (event) => {
    event.preventDefault();
    // Handle the product form submission logic here if needed
  };

  const handleApplyCoupon = () => {
    // Implement coupon logic here
    // For simplicity, we'll assume the couponCode is valid and apply the discount directly
    // You can integrate with a backend to validate coupon codes
  };

  const subtotal = price * quantity;
  const cartTotal = subtotal - discount;
  const totalAmount = cartTotal;

  const handleRemoveProduct = (productId) => {
    // Implement the logic to remove the product from the cart here
    // You can update the cart state or perform any other necessary actions
    console.log(`Removing product with ID: ${productId}`);
  };

  const handleCheckoutFormSubmit = (event) => {
    event.preventDefault();
    // Handle the checkout form submission logic here if needed
  };

  return (
    <div className="App">
      <main className="main-container">
        {/* Product Form */}
        <form className="product-form" onSubmit={handleProductFormSubmit}>
          <div className="form-box">
            <div className="table-responsive">
              <table className="cart-table table table-striped">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="1">
                <div className="product-info">
                  <div className="product-image-box">
                  <h6>Taranga Kanchi Silk Brocade Green Saree</h6>
                  <div class="image-with-description">

                    <img
                      src={img1} 
                      alt="Taranga Kanchi Silk Brocade Green Saree"
                      className="product-image" />
                  </div>
                </div>
                </div>
              </td>
                  <td>
                  <center>  

                <b>₹ {price}</b></center>
 </td>


              <td className="quantity-box">
                <button type="button" className='bt' onClick={handleDecrement}>-</button>
                <span>{quantity}</span>
                <button type="button" className='bt' onClick={handleIncrement}>+</button>
              </td>
              <td>
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    <b>₹{subtotal}</b>
    <button
      type="button"
      onClick={() => handleRemoveProduct(productId)}
      className="remove-icon"
    >
      <FontAwesomeIcon icon={faTrashAlt} /> {/* FontAwesome trash icon */}
    </button>
  </div>
</td>
            </tr>
          </tbody>
          <tfoot>
                  <td colSpan="4">
                    <div className="custom-footer">
                      <button type="submit" className="btn btn-primary">Continue Shopping</button>
                      <button type="submit" className="btn1 btn-primary">Next</button>
                    </div>
                  </td>
              </tfoot>
        </table>
        </div>
      </div>
    </form>
        {/* Checkout Form */}
        <form className="checkout-form" onSubmit={handleCheckoutFormSubmit}>
          <div className="table-responsive">
            <table className="cart-table1 table table-bordered">
              <thead>
                             <th colSpan="1">Checkout</th>
                             <th></th>
              </thead>
            <tbody>
              <tr>
                <td>Sub Total</td>
                <td>₹ {cartTotal}</td>
              </tr>
              <tr>
                <td>Discount</td>
                <td>- ₹ {discount}</td>
              </tr>
              <tr>
                <td>Delivery</td>
                <td>Free</td>
              </tr>

            <tr>
              <td>
                <input type="text" placeholder="Enter Coupon Code" />
              </td>                              <td>
                <button onClick={handleApplyCoupon} className="btn">
                  Apply
                </button>
              </td>
            </tr>
            </tbody>

            <tfoot>
              <tr>
                <td colSpan="2">
                  <h3>Total Amount: ₹ {cartTotal}</h3>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <button type="submit" className="btn1">
                    Checkout
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
