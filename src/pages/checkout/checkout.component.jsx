import React from 'react';
import { connect } from 'react-redux';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({cartItems, totalPrice}) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Producto</span>
      </div>
      <div className="header-block">
        <span>Descripción</span>
      </div>
      <div className="header-block">
        <span>Cantidad</span>
      </div>
      <div className="header-block">
        <span>Precio</span>
      </div>
      <div className="header-block">
        <span>Eliminar</span>
      </div>
    </div>
    {
      cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} cartItem={cartItem} />))
    }
    <div className="total">
      <span>TOTAL: ${totalPrice}</span>
    </div>
    <div className="test-warning">
      *Por favor usar los siguientes datos para pagos de prueba*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div>
    <StripeButton price={totalPrice} />
  </div>
)

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
  totalPrice: selectCartTotal(state)
});

export default connect(mapStateToProps)(CheckoutPage);