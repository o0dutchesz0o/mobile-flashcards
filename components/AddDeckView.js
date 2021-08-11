import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Input } from 'react-native-elements';
import {gray, purple, teal, white} from "../utils/colors";
import AddCardView from "./AddCardView";

export default class AddDeckView extends Component {
  state = {
    title: ''
  }

  handleChange = (e) => {
    const title = e.target.value
    this.setState(() => ({
      title
    }))
  }


  handleSubmit = (e) => {
    // TODO - wire up
    // e.preventDefault()
    // const { text } = this.state
    // const { dispatch, id} = this.props
    //
    // dispatch(handleAddTweet(text, id))
    // this.setState(() => ({
    //   text: '',
    //   toHome: !id
    // }))
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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create Deck</Text>
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