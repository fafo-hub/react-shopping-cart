import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Carousel from "./Components/carousel";
import Navbars from "./Components/navbars"
import Cart from "./Components/cart"
import Store from "./Components/store"
import data from "./Components/data"
import { useState, useEffect } from 'react';
import Example from "./Components/example"




const App = () => {
  
  const { products } = data;
  const [cartItems, setCartItems] = useState([])
  const [cartItemsCount, setCartItemCount] = useState(cartItems.length)

  useEffect(() => {
    if(cartItems.length > cartItemsCount) {
      alert("Item added to cart");
    }
    setCartItemCount(cartItems.length);
  }, [cartItems])
  

  const AddToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    console.log(cartItems);
  };
  const RemoveFromCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
    
  };
  
  
  return ( 
    <div className="div">
      <Navbars cartItems={cartItems}/>
      <Carousel />
      {/* <Example /> */}
      <Cart cartItems={cartItems} AddToCart={AddToCart} RemoveFromCart={RemoveFromCart}/>
      <Store products = { products } AddToCart={AddToCart} />
        </div>
   );
}
 
export default App;