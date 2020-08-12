export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const CLEAR_AUTHED_USER = "CLEAR_AUTHED_USER";

/**
 * @description Sets the "Authed User" ID within authedUser store
 * @param {string} id
 */
export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}

/**
 * @description Clears the "Authed User" from authedUser store
 */
export function clearAuthedUser() {
  return {
    type: CLEAR_AUTHED_USER,
  };
}
