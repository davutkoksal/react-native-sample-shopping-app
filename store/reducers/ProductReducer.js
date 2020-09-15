import PRODUCTS from "../../data/dummy-data";
import Product from "../../models/Product";
import { ADD_PRODUCT, DELETE_USER_PRODUCT } from "../actions/ProductActions";
const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === "u1"),
};

export default ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER_PRODUCT:
      const newUserProducts = state.userProducts.filter(
        (pro) => pro.id !== action.id
      );
      return {
        ...state,
        availableProducts: state.availableProducts,
        userProducts: newUserProducts,
      };
    case ADD_PRODUCT:
      const obj = action.payload;
      const id = Math.floor(Math.random() * 100);
      const newProduct = new Product(
        id,
        "u1",
        obj.title,
        obj.image,
        obj.description,
        obj.price
      );
      const newAv = state.availableProducts.concat(newProduct);
      const newUS = state.userProducts.concat(newProduct);
      return {
        ...state,
        availableProducts: newAv,
        userProducts: newUS,
      };
    default:
      return state;
  }
};
