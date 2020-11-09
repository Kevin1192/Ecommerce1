import React from 'react';
import { connect } from 'react-redux'; 

import { addCartItem } from '../../redux/action/cart.actions';
import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addCartItem, state }) => (
    <div className='collection-item'>
        <div className='image' style={{
            backgroundImage: `url(${item.imageUrl})`
        }} />
            <div className='collection-footer'>
                <span className='name'>{item.name}</span>
                <span className='price'>{item.price}</span>
            </div>
            <CustomButton inverted onClick={() => addCartItem(item)}> Add to Cart </CustomButton>
            {console.log(state)}
        </div>
);

const mapStateToProps = state => ({
    state: state,
})
const mapDispatchToProps = dispatch => ({
    addCartItem: item => dispatch(addCartItem(item)),
})
export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);