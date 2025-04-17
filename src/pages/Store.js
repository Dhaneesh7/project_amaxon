import { createStore } from 'redux';
// import {legacy_createStore as createStore} from "react-redux"
// import createStore from "redux"
// import { createStoreHook } from "react-redux";
// import { createStoreHook } from "react-redux";
// import { configureStore } from '@reduxjs/toolkit';
// import {createStore} from "react-redux"
const initialState = {
  cart: [],
  wishlist:[]
};

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";


export const addToCart = (productlist) => ({ type: ADD_TO_CART, payload: productlist });
export const removeFromCart = (id) => ({ type: REMOVE_FROM_CART, payload: id });

export const addToWishlist = (productlist) => ({
  type: ADD_TO_WISHLIST,
  payload: product,
});

export const removeFromWishlist = (id) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: id,
});


const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
/*const exists = state.items.find((i) => i.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
*/
      return { ...state, cart: [...state.cart, action.payload] }; 
    case REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) }; 

case ADD_TO_WISHLIST: {
      const exists = state.wishlist.find((item) => item.id === action.payload.id);
      if (exists) return state; // prevent duplicates
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    }

    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};
export const store = createStore(cartReducer);
