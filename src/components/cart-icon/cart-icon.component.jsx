import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingBagIcon} from '../../assets/shopping-bag.svg';

// Redux connect.
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';


const CartIcon = ({toggleCartDropdown}) => (
    <div className="cart-icon" onClick={toggleCartDropdown}>
        <ShoppingBagIcon className="shopping-bag-icon"/>
        <span className="item-count">10</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(null, mapDispatchToProps)(CartIcon);