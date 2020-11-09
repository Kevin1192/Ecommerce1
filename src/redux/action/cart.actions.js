import { TOGGLE_CART_HIDDEN, ADD_CARTITEM } from '../actionType';

export const toggleCart = () => ({
    type: TOGGLE_CART_HIDDEN,
})


export const addCartItem = item => ({
    type: ADD_CARTITEM,
    payload: item,
})