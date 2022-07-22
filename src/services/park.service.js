// get park index [from, from + limit) of user

import parkAPI from "data/parkAPI"

// get `limit` park item index `from`
export const getParks = (user, from, limit) => {
  return parkAPI.getParks(user, from, limit) || []
}

