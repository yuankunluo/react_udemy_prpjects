import React from 'react';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';

// Import SVG File direct as ReactComponent
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CardDropdown from '../cart-dropdown/cart-dropdown.component';

// Redux.
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden} from '../../redux/cart/cart.selectors';
import { singOutStart } from '../../redux/user/user.actions';

const Header = ({ currentUser, hidden , singOutStart}) => (
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
        <OptionLink as='div' className='option' onClick={singOutStart}>
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

const mapDispatchToProps = dispatch => (
  {
    singOutStart: () => dispatch(singOutStart())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
