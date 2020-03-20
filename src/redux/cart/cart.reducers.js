import { CART_ACTION_TYPE } from './cart.types';

const INIT_STATE = {
    hidden: true
}


const cartReducer = (state = INIT_STATE, action ) => {
    switch (action.type) {
        case CART_ACTION_TYPE.TOGGLE_CART_DROPDOWN: 
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default cartReducer;