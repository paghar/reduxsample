import * as TYPES from "../actions/types"
import { CardsData } from "../constants/CardsData"

const randomArray = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const itemRate = (state = CardsData, action) => {
  switch (action.type) {
    case TYPES.DISPLAY_LIST:
      return state
    case TYPES.UPADATE_LIST_RATE:
      return state.map(item =>
        item.id === action.id ? { ...item, rate: action.value } : item
      )

    case TYPES.ORDER_LIST:
      return state.sort(function(a, b) {
        return b.rate - a.rate
      })

    case TYPES.RANDOM_RATING:
      return state
        .map(x => ({
          ...x,
          rate: randomArray(1, 5)
        }))
        .sort(function(a, b) {
          return b.rate - a.rate
        })

    default:
      return state
  }
}

export default itemRate
