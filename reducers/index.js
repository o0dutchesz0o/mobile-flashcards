import { RECEIVE_DECKS, ADD_DECK, DELETE_DECK, ADD_CARD } from "../actions";
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
      delete state[action.deck]
      return {
        ...state
      }
    case ADD_CARD:
      debugger
      return {
        ...state,
        [action.key]: {
          ...state[action.key],
              questions: state[action.key].questions.concat([action.newCard])
          }
        }
    default:
      return state
  }
}

export default decks