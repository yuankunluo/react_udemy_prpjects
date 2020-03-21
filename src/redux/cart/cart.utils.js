export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCart = cartItems.find(item => item.id === cartItemToAdd.id);

  if (existingCart) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, {...cartItemToAdd, quantity: 1}];
};
