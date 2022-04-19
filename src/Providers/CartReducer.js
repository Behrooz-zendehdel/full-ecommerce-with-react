const cartReducer = (state, action) => {

  
  const addProductFormCard = (state, payload) => {
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(
      (item) => item.id === payload.id
    );
    if (updatedItemIndex < 0) {
      updatedCart.push({ ...payload, quantity: 1 });
    } else {
      const updatedItem = { ...updatedCart[updatedItemIndex] };
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,
      cart: updatedCart,
      total: state.total + action.payload.price,
    };
  };
  const removeProductFromCard = (state, payload) => {
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(
      (item) => item.id === payload.id
    );
    const updatedItem = { ...updatedCart[updatedItemIndex] };
    if (updatedItem.quantity === 1) {
      const filteredCart = updatedCart.filter((item) => item.id !== payload.id);
      return {
        ...state,
        cart: filteredCart,
        total: state.total - payload.price,
      };
    } else {
      updatedItem.quantity--;
      updatedCart[updatedItemIndex] = updatedItem;
      return {
        ...state,
        cart: updatedCart,
        total: state.total - payload.price,
      };
    }
  };

  switch (action.type) {
    case "ADD_TO_CART":
      return addProductFormCard(state, action.payload);

    case "REMOVE_PRODUCT":
      return removeProductFromCard(state, action.payload);
    default:
      return state;
  }
};

export default cartReducer;
