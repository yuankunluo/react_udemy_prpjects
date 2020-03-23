import { CART_ACTION_TYPE } from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INIT_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CART_ACTION_TYPE.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CART_ACTION_TYPE.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CART_ACTION_TYPE.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };
    case CART_ACTION_TYPE.REMOVE_ITEM_FROM_CART:
        return {
            ...state, 
            cartItems: removeItemFromCart(state.cartItems, action.payload)
        }

    // Clear the cart.
    case CART_ACTION_TYPE.CLEAR_CART: {
      return {
        ...state, 
        cartItems: []
      }
    }
    default:
      return state;
  }
};

export default cartReducer;
