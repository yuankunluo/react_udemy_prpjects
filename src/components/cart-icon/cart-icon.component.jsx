import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingBagIcon} from '../../assets/shopping-bag.svg';

// Redux connect.
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({toggleCartDropdown, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartDropdown}>
        <ShoppingBagIcon className="shopping-bag-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapStateToProps = createStructuredSelector(
    {
        itemCount: selectCartItemsCount
    }
);

const mapDispatchToProps = dispatch => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);