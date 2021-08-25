import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({currentUser, cartDropdownHidden}) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"/>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">TIENDA</Link>
      <Link className="option" to="/contact">CONTACTO</Link>
      {
        currentUser ?
        <div className="option" onClick={() => auth.signOut()}>CERRAR SESIÓN</div>
        :
        <Link className="option" to="/signin">INICIAR SESIÓN</Link>
      }
      <CartIcon />
    </div>
    {cartDropdownHidden ? (null) : (<CartDropdown />) }
  </div>
)

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
  cartDropdownHidden: selectCartHidden(state)
});

export default connect(mapStateToProps)(Header);