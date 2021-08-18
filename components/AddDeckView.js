import React, { Component } from "react";
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Input } from 'react-native-elements';
import {gray, purple, teal, white} from "../utils/colors";
import {formatDeckKey} from "../utils/helpers";
import {submitDeck} from "../utils/api";
import {addDeck} from "../actions";

function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.submitBtn}>
      <Text style={styles.submitBtnText}>Create Deck</Text>
    </TouchableOpacity>
  )
}

class AddDeckView extends Component {
  state = {
    title: '',
    questions: []
  }

  handleChange = (e) => {
    const title = e
    this.setState(() => ({
      title
    }))
  }


  handleSubmit = (e) => {
    const key = formatDeckKey(this.state.title)
    const deck = this.state

    this.props.dispatch(addDeck({
      [key]: deck
    }))
    this.setState( () => ({
      title: '',
      questions: []
    }))

    this.toDeck()

    submitDeck( {deck, key})
  }

  toDeck = () => {
    this.props.navigation.navigate('IndividualDeck', { title: this.state.title })
  }

  render () {
    const { title } = this.state
    return (
      <View>
        <Text style={styles.header}>Add New Deck</Text>
        <Input style={styles.input}
          label='Title'
          placeholder='Enter title here'
          value={title}
          onChangeText={this.handleChange}
        />
        <SubmitBtn onPress={this.handleSubmit} />
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
  submitBtn: {
    padding: 12,
    backgroundColor: purple,
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    marginTop: 25 //TODO CHANGE TO FLEX
  },
  submitBtnText: {
    color: white,
    fontSize: 20,
    textAlign: 'center'
  }
})

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(AddDeckView)