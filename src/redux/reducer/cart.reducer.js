import { TOGGLE_CART_HIDDEN, ADD_CARTITEM, CLEAR_ITEM_FROM_CART, REMOVE_CARTITEM } from '../actionType';
import { addItemToCart, removeItemFromCart } from '../utils/cart.utils';
 
const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case ADD_CARTITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            }

        case REMOVE_CARTITEM:
            return {
                ...state,
                cartItems:  removeItemFromCart(state.cartItems, action.payload)
            }
        default:
            return state
    }
}

export default cartReducer;