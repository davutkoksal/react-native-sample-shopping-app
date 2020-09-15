export const DELETE_USER_PRODUCT = "DELETE_USER_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";

export function deleteUserProduct(id) {
  return { type: DELETE_USER_PRODUCT, id: id };
}

export function addProduct(payload) {
  return { type: ADD_PRODUCT, payload };
}
