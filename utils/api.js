import { AsyncStorage } from 'react-native'
import { DECK_STORAGE_KEY, formatDeckResults } from "./_DATA";

export function submitDeck ({deck, key}) {
  //add entry to our db (AsyncStorage)
  debugger
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [key]: deck
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
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(formatDeckResults)
}