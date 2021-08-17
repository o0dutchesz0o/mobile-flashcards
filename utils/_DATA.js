export const DECK_STORAGE_KEY = 'MobileFlashcards:deck'

export let initialState = {
    ReactNative: {
      title: 'React Native',
      questions: [
      ]
    },
    React: {
      title: 'React',
      questions: [
        {
          cardQuestion: 'What is React?',
          cardAnswer: 'A library for managing user interfaces'},
        {
          cardQuestion: 'Where do you make Ajax requests in React?',
          cardAnswer: 'The componentDidMount lifecycle event'}
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          cardQuestion: 'What is a closure?',
          cardAnswer: 'The combination of a function and the lexical environment within which that function was declared.'}
      ]
    },
  }

export function formatDeckResults () {
  return initialState
}