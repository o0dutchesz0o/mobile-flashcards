import { RECEIVE_DECKS, ADD_DECK } from "../actions";

function decks( state={}, action) {
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
    default:
      return state
  }
}

export default decks