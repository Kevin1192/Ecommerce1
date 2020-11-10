import React from 'react';

import './checkout-item.styles.scss';

import { connect } from 'react-redux';

import { clearItemFromCart, addCartItem, removeCartItem } from '../../redux/action/cart.actions';

const CheckoutItem = ({ cartItem, clearItem, addCartItem, removeItem}) => {
    const {imageUrl, quantity, name, price } = cartItem;
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
            <div className='value'>{quantity}</div>
            <div className='arrow' onClick={() => addCartItem(cartItem)}>&#10095;</div>
            </span>
        <span className='price'>{price}</span>
        <span className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</span>
    </div>
)
    }


const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addCartItem: item => dispatch(addCartItem(item)),
    removeItem: item => dispatch(removeCartItem(item))

})

export default connect(null, mapDispatchToProps)(CheckoutItem);