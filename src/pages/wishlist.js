// src/Wishlist.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromWishlist,
  addToCart,
  removeFromCart, // optional if you want to avoid duplicates
} from "./Store";
import "./Card.css";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id));
  };

  const moveToCart = (item) => {
    const existsInCart = cart.find((cartItem) => cartItem.id === item.id);
    if (!existsInCart) {
      dispatch(addToCart(item));
    }
    dispatch(removeFromWishlist(item.id));
  };

  return (
    <div>
      <h1>My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        wishlist.map((item) => (
          <div id="wishlist" key={item.id} style={{ borderBottom: "1px solid #ccc", marginBottom: "10px" }}>
            <img src={item.img} alt="wishlist" width={300} height={200} />
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <button onClick={() => moveToCart(item)}>Move to Cart</button>
            <button onClick={() => handleRemove(item.id)} style={{ marginLeft: "10px" }}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;
