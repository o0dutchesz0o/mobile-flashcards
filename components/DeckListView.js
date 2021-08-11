import React, { Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { teal, purple, gray, white } from "../utils/colors";

export default class DeckListView extends Component {
  render () {
    const { decks } = this.props
    return (
      <View>
        <Text style={styles.header}>Decks Header</Text>
        {Object.keys(decks).map((deck) => {
          const { title, questions} = decks[deck]
          const cards = questions.length === 1 ? 'card' : 'cards'
          return (
            <View style={styles.container}>
              <Text style={styles.deckTitle}>Deck Name: {title}</Text>
              <Text style={styles.questions}>{questions.length} {cards}</Text>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>Add Card</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Start Quiz</Text>
              </TouchableOpacity>
              {/*//todo MOVE TO COMPONENT*/}
              {questions.map((question) => {
                return (
                  <View>
                    <Text style={styles.cardQuestion}>{question.cardQuestion}</Text>
                    <TouchableOpacity style={styles.button}>
                      <Text style={styles.buttonText}>Check Answer</Text>
                    </TouchableOpacity>
                    <Text style={styles.cardAnswer}>{question.cardAnswer}</Text>
                    <TouchableOpacity style={styles.button}>
                      <Text style={styles.buttonText}>Back to Question</Text>
                    </TouchableOpacity>
                  </View>
                )})
              }
            </View>
          )
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: gray,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  header: {
    color: teal,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  deckTitle: {
    color: purple,
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 10,
  },
  questions: {
    color: gray,
    fontSize: 15,
    textAlign: 'center',
  },
  //TODO MOVE TO COMPONENT
  cardQuestion: {
    color: gray,
    fontSize: 30,
    textAlign: 'center',
  },
  cardAnswer: {
    color: teal,
    fontSize: 30,
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  button: {
    padding: 10,
    backgroundColor: purple,
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
  },
  buttonText :{
    color: white,
    fontSize: 20,
  },
  addButton: {
    padding: 10,
    // backgroundColor: teal,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: teal,
    borderRadius: 10,
    margin: 10,
  },
  addButtonText :{
    color: teal,
    fontSize: 20,
  },
})