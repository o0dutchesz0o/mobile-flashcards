import React, { Component } from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {gray, purple, teal, white} from "../utils/colors";
import QuizView from "./QuizView";
import {connect} from "react-redux";

class IndividualDeckView extends Component {
  render () {
    const { title } = this.props.route.params
    const { decks } = this.props
    const deck = decks[title]
    const questions = deck.questions
    const cards = questions.length === 1 ? 'card' : 'cards'

    debugger
    return (
      <View>
        <Text style={styles.deckTitle}>{title}</Text>
        <Text style={styles.questions}>{questions.length} {cards}</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => this.props.navigation.navigate('AddCard', { title: title })}>
          <Text style={styles.addButtonText}>Add Card</Text>
        </TouchableOpacity>
        {questions.length > 0 &&
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('QuizView',
            {
              title: title,
              questions: questions
            }
          )}>
          <Text style={styles.buttonText}>Start Quiz</Text>
        </TouchableOpacity>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deckTitle: {
    color: purple,
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 50,
  },
  questions: {
    color: gray,
    fontSize: 15,
    textAlign: 'center',
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

function mapStateToProps(state) {
  return {decks : state}
}

export default connect(mapStateToProps)(IndividualDeckView)