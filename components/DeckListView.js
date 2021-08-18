import React, { Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { teal, purple, gray } from "../utils/colors";
import {formatDeckKey} from "../utils/helpers";
import {fetchDecks, removeDeck} from "../utils/api";
import { AppLoading } from 'expo'
import {receiveDecks, deleteDeck} from "../actions";

class DeckListView extends Component {
  state = {
    ready: false
  }

  componentDidMount() {
    const { dispatch } = this.props
    fetchDecks()
      .then((decks) => dispatch(receiveDecks(decks)))
      .then(() => this.setState(() => ({
        ready: true
      })))
  }

  handleDelete = (title) => {
    const key = formatDeckKey(title)

    this.props.dispatch(deleteDeck(key))

    removeDeck(key)
  }

  render () {
    const { decks } = this.props
    const { ready } = this.state

    if ( ready === 'false' ) {
      return <AppLoading/>
    }

    return (
      <View>
        <Text style={styles.header}/>
        {Object.keys(decks).map((deck) => {
          const { title, questions} = decks[deck]
          const cards = questions.length === 1 ? 'card' : 'cards'

          return (
            <View style={styles.container} key={deck}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('IndividualDeck', { title: title })}>
                <Text style={styles.deckTitle}>{title}</Text>
                <Text style={styles.questions}>{questions.length} {cards}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.handleDelete(title)}>
                <Text style={styles.deleteBtnText}>Delete Deck</Text>
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
  deleteBtnText :{
    color: purple,
    fontSize: 15,
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 5
  },
})

function mapStateToProps(state) {
  return {decks : state}
}

export default connect(mapStateToProps)(DeckListView)