import React from 'react';


const closeCart = (e) => {
    document.querySelector('.cart-overlay').style.visibility = 'hidden'
    document.querySelector('.cart').style.transform = 'translateX(101%)'
  }

const cart = ({cartItems, AddToCart, RemoveFromCart}) => {
  //console.log(cartItems);
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return (
    <div> 
        <div className="cart-overlay">
        <div className="cart">
          <span onClick={closeCart} className="close-cart">
            <i className="fas fa-window-close"></i>
          </span>
          <h2 className='your-cart'>Your Cart</h2>
          <div className="items-purchased">
            <div className="empty-cart">
              {cartItems.length === 0 && <div>Cart is Empty</div>}
            </div>
            {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt="item" />
            <div className="price-name">
              <h2>{item.title}</h2>
              
              <h2>${item.price}</h2>
            </div>
            <div className="add-subtract">
              <h2 onClick={() => RemoveFromCart(item)} className="remove">
                -
              </h2>{' '}
              <h3>{item.qty}</h3>
              <h2 onClick={() => AddToCart(item)} className="add">
                +
              </h2>
            </div>
              
            {/* <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div> */}
          </div>
        ))}
                {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="footer">
              <div className="footer-text">Items Price: </div>
              <div className="footer-price">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="footer">
              <div className="footer-text">Tax Price: </div>
              <div className="footer-price">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="footer">
              <div className="footer-text">Shipping Price: </div>
              <div className="footer-price">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>
                  <br/>
            <div className="footer">
              <div className="footer-text">
                <strong>Total Price: </strong>
              </div>
              <div className="footer-price">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="checkout">
              <button className='checkout-btn' onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
          </>
        )}
          </div>
        </div>
      </div>
      
    </div>
     );
}
 
export default cart;


