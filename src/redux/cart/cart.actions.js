import { CART_ACTION_TYPE } from './cart.types';



export const toggleCartDropdown = () => ({
    type: CART_ACTION_TYPE.TOGGLE_CART_DROPDOWN
});

export const addItem = item  => ({
    type : CART_ACTION_TYPE.ADD_ITEM,
    payload: item
});