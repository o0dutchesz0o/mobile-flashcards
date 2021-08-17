import React, {Component, Componet} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { gray, purple, white, teal } from "../utils/colors";

export default class Flashcard extends Component {
  state = {
    view: 'question',
    correct: 0,
    incorrect: 0,
    disabled: false //at end of quiz set disabled back to false
  }

  checkAnswer = () => {
    this.setState(() => ({
      view: 'answer'
    }))
  }

  answerCorrect = () => {
    this.setState(() => ({
      correct: this.state.correct + 1,
      disabled: true
    }))
  }

  answerIncorrect = () => {
    this.setState(() => ({
      incorrect: this.state.incorrect + 1,
      disabled: true
    }))
  }

  render() {
    debugger
    const { view, disabled } = this.state
    const { card, cardQuestion, cardAnswer } = this.props

    return (
      <View style={styles.container}>
        {view === 'question' &&
          <View>
            <Text style={styles.cardQuestion}>{cardQuestion}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={this.checkAnswer}>
                  <Text style={styles.buttonText}>Check Answer</Text>
              </TouchableOpacity>
          </View>
        }
        { view === 'answer' &&
          <View>
            <Text style={styles.cardAnswer}>{cardAnswer}</Text>
            <TouchableOpacity
              style={styles.button}
              disabled={disabled}
              onPress={this.answerCorrect}>
                <Text style={styles.buttonText}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              disabled={disabled}
              onPress={this.answerIncorrect}
            >
              <Text style={styles.buttonText}>Incorrect</Text>
            </TouchableOpacity>
            <Text>
            {JSON.stringify(`correct: ${this.state.correct}`)}
            {JSON.stringify(`incorrect: ${this.state.incorrect}`)}
            </Text>
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: gray,
    margin: 5,
    paddingTop: 5
  },
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
})