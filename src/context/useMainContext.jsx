import React, { createContext, useReducer, useState } from 'react'
import { reducer } from '../reducer/STORE.JS';
import { ADD_ONE, ADD_TO_CART, ADD_TO_LIKE, REMOVE_FROM_CART, REMOVE_FROM_LIKE, REMOVE_ONE } from '../reducer/type';
import { data } from 'autoprefixer';
import { useEffect } from 'react';

export const UseMainContext = createContext(null);

export function UseMainContextProvider({ children }) {

    const initialState = {
        cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
        likeItems: JSON.parse(localStorage.getItem('likeItems')) || [],
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    const addToCart = (data) => dispatch({ type: ADD_TO_CART, payload: data });
    const addToLike = (data) => dispatch({type: ADD_TO_LIKE, payload: data});
    const addOne = id => dispatch({type: ADD_ONE, payload: id});

    const removeFromCart = (id) => dispatch({ type: REMOVE_FROM_CART, payload: id });
    const removeFromLike = (id) => dispatch({ type: REMOVE_FROM_LIKE, payload: id });
    const removeOne = id => dispatch({type: REMOVE_ONE, payload: id});
    

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    }, [state.cartItems]);

    useEffect(() => {
        localStorage.setItem('likeItems' , JSON.stringify(state.likeItems));
    }, [state.likeItems]);
    
    return (
        <UseMainContext.Provider
            value={{
                addToCart,
                addToLike,
                removeFromCart,
                removeFromLike,
                cartItems: state.cartItems,
                likeItems: state.likeItems,
                addOne,
                removeOne
            }}>
            {children}
        </UseMainContext.Provider>
    );
}