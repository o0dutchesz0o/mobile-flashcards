import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import DeckListView from "./components/DeckListView";
import { decks } from "./utils/_DATA";
import Constants from 'expo-constants';
import { teal } from "./utils/colors";

function MFStatusBar({backgroundColor, ...props}) {
  return(
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}

export default class App extends React.Component {
  state = {
    decks: decks
  }
  render() {
    const {decks} = this.state
    return (
      <View style={styles.container}>
        <MFStatusBar backgroundColor={teal} barStyle='light-content'/>
        <DeckListView decks={decks}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
