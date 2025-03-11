import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_FROM_CART, removeFromCart } from "./Store"
import "./Card.css"
function Cart() {
  const cart = useSelector((state) => state.cart);  
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? <p>Your cart is empty</p> : (
        cart.map(item => (
          <div  id="cart" key={item.id}>
                  <img src={item.img} alt="product picture" width={300} height={200} />

            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <button onClick={() => dispatch(REMOVE_FROM_CART(item.id))}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;