import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Input } from 'react-native-elements';
import {gray, purple, teal, white} from "../utils/colors";
import {formatDeckKey} from "../utils/helpers";
import {submitCard} from "../utils/api";
import {connect} from "react-redux";
import {addCard} from "../actions";

class AddCardView extends Component {
  state = {
    cardQuestion: '',
    cardAnswer: ''
  }

  handleChange = (e, id) => {
    this.setState(() => ({
      [id]: e
    }))
  }


  handleSubmit = (e) => {
    const {title} = this.props.route.params
    const key = formatDeckKey(title)

    const {cardQuestion, cardAnswer } = this.state

    this.props.dispatch(addCard({
      cardQuestion,
      cardAnswer
    }, key))

    this.toDeck()

    submitCard( {
      cardQuestion,
      cardAnswer
    }, key)

    this.setState( () => ({
      cardQuestion: '',
      cardAnswer: ''
    }))
  }

  toHome = () => {
    this.props.navigation.navigate('Home', { screen: 'Decks' })
  }

  toDeck = () => {
    const { title } = this.props.route.params
    this.props.navigation.navigate('IndividualDeck', { title: title })
  }

  render () {
    const { cardQuestion, cardAnswer } = this.state

    return (
      <View>
        <Text style={styles.header}>Add New Card</Text>
        <Input style={styles.input}
               id='cardQuestion'
               label="Question"
               placeholder='Enter question here'
               value={cardQuestion}
               onChangeText={(e) => this.handleChange(e, 'cardQuestion')}
        />
        <Input style={styles.input}
               id='cardAnswer'
               label="Answer"
               placeholder='Enter answer here'
               value={cardAnswer}
               onChangeText={(e) => this.handleChange(e,'cardAnswer')}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleSubmit}
        >

          <Text style={styles.buttonText}>Add Card</Text>
        </TouchableOpacity>
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
    color: purple,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50 //TODO CHANGE TO FLEX
  },
  button: {
    padding: 10,
    backgroundColor: purple,
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    marginTop: 25 //TODO CHANGE TO FLEX
  },
  buttonText :{
    color: white,
    fontSize: 20,
  },
})

function mapStateToProps(state) {
  return {decks : state}
}

export default connect(mapStateToProps)(AddCardView)