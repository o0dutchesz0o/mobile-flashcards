import React, { Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { teal, purple, gray } from "../utils/colors";
import { generateUID } from "../utils/helpers";
import IndividualDeckView from "./IndividualDeckView";
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
            <View style={styles.container} key={generateUID()}>
              <Text style={styles.deckTitle}>Deck Name: {title}</Text>
              <Text style={styles.questions}>{questions.length} {cards}</Text>
              <IndividualDeckView title={title} questions={questions} cards={cards}/>
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
})