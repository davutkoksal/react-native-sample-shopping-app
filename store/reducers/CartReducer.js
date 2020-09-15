import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/CartActions";
import CartItem from "../../models/CartItem";
import { ADD_ORDER } from "../actions/OrderActions";
const initialState = {
  items: {},
  total: 0,
};

function CartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.payload;
      const productId = addedProduct.id;
      const productTitle = addedProduct.title;
      const productPrice = addedProduct.price;
      const productImageUrl = addedProduct.imageUrl;
      let newCartItem;
      if (state.items[productId]) {
        newCartItem = {
          ...state.items[productId],
          quantity: state.items[productId].quantity + 1,
          sum: state.items[productId].quantity * productPrice + productPrice,
        };
      } else {
        newCartItem = new CartItem(
          1,
          productTitle,
          productPrice,
          productImageUrl,
          productPrice,
          productId
        );
      }
      return {
        ...state,
        items: { ...state.items, [productId]: newCartItem },
        total: state.total + productPrice,
      };
    case REMOVE_FROM_CART:
      const curProductId = action.payload;
      const currentQuantity = state.items[curProductId].quantity;
      const currentSum = state.items[curProductId].sum;
      const currentItem = state.items[curProductId];
      let updatedCartItems;
      if (currentQuantity > 1) {
        const updatedCartItem = new CartItem(
          currentQuantity - 1,
          currentItem.productTitle,
          currentItem.productPrice,
          currentItem.productImageUrl,
          currentSum - currentItem.productPrice,
          action.payload
        );
        updatedCartItems = {
          ...state.items,
          [action.payload]: updatedCartItem,
        };
      } else {
        updatedCartItems = { ...state.items };
        delete updatedCartItems[curProductId];
      }

      return {
        ...state,
        items: updatedCartItems,
        total: state.total - currentItem.productPrice,
      };
    case ADD_ORDER:
      return initialState;
    default:
      return state;
  }
}
export default CartReducer;
