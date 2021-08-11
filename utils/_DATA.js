export let decks = {
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

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}