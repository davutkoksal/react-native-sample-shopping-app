export const ADD_ORDER = "ADD_ORDER";

export function addOrder(itemsArr, total) {
  return { type: ADD_ORDER, orderData: { items: itemsArr, amount: total } };
}
