import { createStore } from 'redux';
// import {legacy_createStore as createStore} from "react-redux"
// import createStore from "redux"
// import { createStoreHook } from "react-redux";
// import { createStoreHook } from "react-redux";
// import { configureStore } from '@reduxjs/toolkit';
// import {createStore} from "react-redux"
const initialState = {
  cart: []  
};

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = (productlist) => ({ type: ADD_TO_CART, payload: productlist });
export const removeFromCart = (id) => ({ type: REMOVE_FROM_CART, payload: id });

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] }; 
    case REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) }; 
    default:
      return state;
  }
};
export const store = createStore(cartReducer);
