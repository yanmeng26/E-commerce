import React from 'react';
import {Link} from 'react-router-dom';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';
import{auth} from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';


const Header = ({currentUser,hidden})=>(
  <HeaderContainer>
<LogoContainer to='/'>

<img src ={window.location.origin + `/img/logo.png`} width={60} height = {60}className='logo'/>

</LogoContainer>
    <OptionsContainer>
    <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/shop'>CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink onClick={() => auth.signOut()}>
          SIGN OUT
          </OptionLink>
      ) : ( 
        <OptionLink className='option' to='/signin'>
          SIGN IN
          </OptionLink>
      )}
      <CartIcon />
      </OptionsContainer>
    {hidden ? null : <CartDropdown />}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);