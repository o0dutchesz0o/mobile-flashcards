import React, { Component } from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {generateUID} from "../utils/helpers";
import {gray, purple, teal, white} from "../utils/colors";


export default class QuizView extends Component {
  render () {
    const { questions } = this.props
    return (
      <View>
        {questions.map((question) => {
          return (
            <View key={generateUID()}>
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
  }
}

const styles = StyleSheet.create({
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