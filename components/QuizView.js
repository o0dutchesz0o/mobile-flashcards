import React, { Component } from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {generateUID} from "../utils/helpers";
import {gray, purple, teal, white} from "../utils/colors";
import Flashcard from "./Flashcard";

export default class QuizView extends Component {
  state = {
    displayQuestion: '0',
    correctAnswers: '0',
    incorrectAnswers: '0'
  }
  render () {
    const { questions } = this.props.route.params
    const { displayQuestion, correctAnswers, incorrectAnswers } = this.state

    const quizQuestions = questions.map(question => question.cardQuestion)
    const quizAnswers = questions.map(question => question.cardAnswer)

    return (
      <View>
        {questions.map((question, index) => {
          return (
            <View key={generateUID()}>
              <Flashcard
                card={index}
                cardQuestion={question.cardQuestion}
                cardAnswer={question.cardAnswer}
              />
            </View>
          )})
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
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
  },
})