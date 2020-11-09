import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { toggleCart } from '../../redux/action/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items' >{cartItems.length ? 
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
    : <span className='empty-message'>Your Cart Is Empty</span>}
        </div>
        <Link to='/checkout' onClick={
            () => dispatch(toggleCart())
        }><CustomButton>GO TO CHECKOUT</CustomButton></Link>
    </div>
)


const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
})

export default connect(mapStateToProps)(CartDropdown);