import React from 'react';
import './header.styles.scss';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.util';
import { createStructuredSelector } from 'reselect'

import { ReactComponent as Logo } from '../../assets/imgs/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/selector/cart.selector';
import { selectCurrentUser } from '../../redux/selector/user.selector';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>

        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ? <div className='option' onClick={ async () => {
                   await auth.signOut();
                }}>SIGN OUT</div> : <Link className='option' to='/auth'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden || <CartDropdown />
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header);
