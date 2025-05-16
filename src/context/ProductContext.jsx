import { createContext, useReducer } from "react";
import { productReducer, defaultProduct } from "../reducers/ProductReducers";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, defaultProduct);

  const handlerDeleteProduct = (id) => {
    dispatch({ type: "DELETE_PRODUCT", id: id });
  };

  const handlerUpdateAddForm = (event, key) => {
    dispatch({ type: "UPDATE_ADD_FORM", value: event.target.value, key: key });
  };

  const handlerAddToCart = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_TO_CART" });
  };

  const handlerEditProduct = (id) => {
    dispatch({ type: "EDIT_PRODUCT", id: id });
  };

  const handlerUpdateEditForm = (event, key) => {
    dispatch({ type: "UPDATE_EDIT_FORM", value: event.target.value, key: key });
  };

  const handlerUpdateProduct = (event) => {
    event.preventDefault();
    dispatch({ type: "UPDATE_PRODUCT" });
  };

  const data = {
    list: state.list,
    add: state.add,
    edit: state.edit,
    editProduct: state.editProduct,
    handlerDeleteProduct,
    handlerAddToCart,
    handlerUpdateAddForm,
    handlerEditProduct,
    handlerUpdateEditForm,
    handlerUpdateProduct,
  };
  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
}

export default ProductContext;
