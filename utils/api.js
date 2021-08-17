import { AsyncStorage } from 'react-native'
import {DECK_STORAGE_KEY, formatDeckResults, initialState} from "./_DATA";

export function submitDeck ({deck, key}) {
  //add entry to our db (AsyncStorage)

  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [key]: deck
  }))
}

export function submitCard({cardQuestion, cardAnswer}, key) {
  //add entry to our db (AsyncStorage)
  const newCard = { cardQuestion, cardAnswer}
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [key]: {
      questions: {newCard}
    }
  }))
}

export function removeDeck (key) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      //save all the data after we're removed that key
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
    })
}

export function fetchDecks () {
  return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(initialState))
    .then(formatDeckResults)
}