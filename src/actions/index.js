import * as TYPES from "../actions/types"

export const sortrList = () => ({
  type: TYPES.ORDER_LIST
})

export const updateListRate = (value, id) => ({
  type: TYPES.UPADATE_LIST_RATE,
  value,
  id
})

export const randomRating=()=>({
  type:TYPES.RANDOM_RATING
})