import { TOGGLE_CART_HIDDEN, ADD_CARTITEM, CLEAR_ITEM_FROM_CART, REMOVE_CARTITEM } from '../actionType';

export const toggleCart = () => ({
    type: TOGGLE_CART_HIDDEN,
})


export const addCartItem = item => ({
    type: ADD_CARTITEM,
    payload: item,
})

export const clearItemFromCart = item => ({
    type: CLEAR_ITEM_FROM_CART,
    payload: item,
})

export const removeCartItem = item => ({
    type: REMOVE_CARTITEM,
    payload: item
})