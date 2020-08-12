export const GET_USERS = "GET_USERS";

/**
 * Fills the "users" store with the users object
 * @param {object} users
 */
export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}
