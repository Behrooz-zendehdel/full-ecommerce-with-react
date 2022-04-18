import { useContext, useReducer, createContext } from "react";

const cartContext = createContext();
const cartContextDispatcher = createContext();

const CartProvider = ({ chidlren }) => {
  return (
    <cartContext.Provider>
      <cartContextDispatcher.Provider>
        {chidlren}
      </cartContextDispatcher.Provider>
    </cartContext.Provider>
  );
};

export default CartProvider;
