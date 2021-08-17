import React, { Component } from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {gray, purple, teal, white} from "../utils/colors";
import QuizView from "./QuizView";

export default class IndividualDeckView extends Component {
  render () {
    const {title, questions, cards } = this.props.route.params

    return (
      <View>
        <Text style={styles.deckTitle}>{title}</Text>
        <Text style={styles.questions}>{questions.length} {cards}</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => this.props.navigation.navigate('AddCard',
          {
            title: title,
          }
        )}>
          <Text style={styles.addButtonText}>Add Card</Text>
        </TouchableOpacity>
        {questions.length > 0 &&
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start Quiz</Text>
        </TouchableOpacity>}
        <QuizView questions={questions}/>
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