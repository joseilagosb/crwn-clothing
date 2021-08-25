import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history, cartDropdownHidden}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.length 
          ? (cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />)))
          : (<span className="empty-message">Tu carro está vacío</span>)
      }
    </div>
    <CustomButton onClick={() => {
      history.push("/checkout");
      cartDropdownHidden();
    }}>COMPRAR</CustomButton>
  </div>
)

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

const mapDispatchToProps = dispatch => ({
  cartDropdownHidden: () => dispatch(toggleCartHidden())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));