import { ADD_ORDER } from "../actions/OrderActions";

const initialState = {
  orders: [],
};
export default function OrderReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ORDER:
      const orderItems = action.orderData.items;
      const orderAmount = action.orderData.amount;
      const newOrder = {
        id: new Date().toString(),
        items: orderItems,
        amount: orderAmount,
        date: new Date(),
      };
      return { ...state, orders: state.orders.concat(newOrder) };

    default:
      return state;
  }
}
