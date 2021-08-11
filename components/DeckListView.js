import React, { Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { decks } from "../utils/_DATA.js";
import { teal, purple, gray } from "../utils/colors";
import { generateUID } from "../utils/helpers";
import IndividualDeckView from "./IndividualDeckView";

export default class DeckListView extends Component {
  state = {
    decks: decks
  }

  render () {
    const {decks} = this.state
    return (
      <View>
        <Text style={styles.header}/>
        {Object.keys(decks).map((deck) => {
          const { title, questions} = decks[deck]
          const cards = questions.length === 1 ? 'card' : 'cards'
          return (
            <View style={styles.container} key={generateUID()}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('IndividualDeck',
                {
                  title: title,
                  questions: questions,
                  cards: cards
                }
              )}>
                <Text style={styles.deckTitle}>{title}</Text>
                <Text style={styles.questions}>{questions.length} {cards}</Text>
              </TouchableOpacity>
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
    fontSize: 10,
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