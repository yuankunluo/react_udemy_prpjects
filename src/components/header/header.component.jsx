import React from 'react';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';

// Import SVG File direct as ReactComponent
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CardDropdown from '../cart-dropdown/cart-dropdown.component';

// React
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden} from '../../redux/cart/cart.selectors';


const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer  to='/'>
      <Logo className='logo' />
    </LogoContainer>

    <OptionsContainer>
      <OptionLink  to='/shop'>
        Shop
      </OptionLink>
      <OptionLink to='/shop'>
        Contact
      </OptionLink>

      {currentUser ? (
        <OptionLink as='div' className='option' onClick={() => auth.signOut()}>
          Sign Out
        </OptionLink>
      ) : (
        <OptionLink className='option' to='/signin'>
          Sign In
        </OptionLink>
      )}

      <CartIcon />
    </OptionsContainer>

    {hidden ? null : <CardDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
