import { RECEIVE_DECKS, ADD_DECK, DELETE_DECK } from "../actions";
import {initialState} from "../utils/_DATA";

function decks( state= initialState, action) {
  switch(action.type) {
    case RECEIVE_DECKS:
      return {
        ...state, //keep state exactly like it is
        ...action.decks //but also we want to merge action.decks on it
      }
    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      }
    case DELETE_DECK:
      let copy = Object.assign({}, state)
      delete copy["decks"][action.deck]
      return {
        ...state,
        copy
      }
    default:
      return state
  }
}

export default decks