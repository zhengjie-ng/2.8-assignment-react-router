import { dummyData } from "../data/data";
import { v4 as uuid } from "uuid";

export const defaultProduct = {
  list: dummyData,
  add: { name: "", quantity: "", price: "", discount: "" },
  edit: { name: "", quantity: "", price: "", discount: "" },
  editProduct: "",
};

export function productReducer(state, action) {
  switch (action.type) {
    case "DELETE_PRODUCT": {
      const newList = state.list.filter((item) => item.id !== action.id);
      return { ...state, list: newList };
    }
    case "UPDATE_ADD_FORM": {
      state.add[action.key] = action.value;
      return { ...state };
    }

    case "ADD_TO_CART": {
      const newItem = {
        id: uuid(),
        name: state.add.name,
        quantity: state.add.quantity,
        price: state.add.price,
        discount: state.add.discount,
      };
      return { ...state, list: [...state.list, newItem] };
    }
    case "EDIT_PRODUCT": {
      const newEditProduct = state.list.find((item) => item.id === action.id);
      const newEdit = {
        name: newEditProduct.name,
        quantity: newEditProduct.quantity,
        price: newEditProduct.price,
        discount: newEditProduct.discount,
      };

      return { ...state, editProduct: newEditProduct, edit: newEdit };
    }

    case "UPDATE_EDIT_FORM": {
      state.edit[action.key] = action.value;
      return { ...state };
    }

    case "UPDATE_PRODUCT": {
      state.editProduct.name = state.edit.name;
      state.editProduct.quantity = state.edit.quantity;
      state.editProduct.price = state.edit.price;
      state.editProduct.discount = state.edit.discount;

      return { ...state };
    }

    default:
      throw Error("productReducer - unknown action:", action.type);
  }
}
