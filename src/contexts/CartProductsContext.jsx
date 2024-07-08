import { createContext, useContext, useReducer } from "react";

const CartProductsContext = createContext();

export const useCartProductsContext = () => {
  return useContext(CartProductsContext);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT": {
      return { ...state, cart: [...action.data] };
    }

    default:
      return state;
  }
};

const CartProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    cart: [],
  });

  return (
    <CartProductsContext.Provider value={[state, dispatch]}>
      {children}
    </CartProductsContext.Provider>
  );
};

export default CartProductsProvider;
