import { CART_ACTION_TYPE } from './cart.types';
import { addItemToCart } from './cart.utils';

const INIT_STATE = {
    hidden: true,
    cartItems: []
}


const cartReducer = (state = INIT_STATE, action ) => {
    switch (action.type) {
        case CART_ACTION_TYPE.TOGGLE_CART_DROPDOWN: 
            return {
                ...state,
                hidden: !state.hidden
            }
        case CART_ACTION_TYPE.ADD_ITEM: 
            return {
                ...state, 
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;