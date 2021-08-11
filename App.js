import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import DeckListView from "./components/DeckListView";
import AddDeckView from "./components/AddDeckView";
import Constants from 'expo-constants';
import {teal, purple, white, lightPurple} from "./utils/colors";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'

function MFStatusBar({backgroundColor, ...props}) {
  return(
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}

const RouteConfigs = {
  Decks:{
    name: "Decks",
    component: DeckListView,
    options: {tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name="cards" size={26} color={tintColor} style={{color: Platform.OS === "ios" ? teal : white}} />, title: 'Decks'}
  },
  AddDeck:{
    component: AddDeckView,
    name: "Add Deck",
    options: {tabBarIcon: ({tintColor}) => <MaterialIcons name="library-add" size={26} color={tintColor} style={{color: Platform.OS === "ios" ? teal : white}} />, title: 'Add Deck'}
  }
}

const TabNavigatorConfig = {
  navigationOptions: {
    header: null
  },
  screenOptions: {
    tabBarActiveTintColor: Platform.OS === "ios" ? teal : white,
    tabBarStyle: {
      height: 70,
      backgroundColor: Platform.OS === "ios" ? white : teal,
    },
    tabBarIndicatorStyle: {
      backgroundColor: lightPurple,
      height: 5,
      borderRadius: 3
    },
  },
};

const Tab = Platform.OS === 'ios'
  ? createBottomTabNavigator()
  : createMaterialTopTabNavigator()

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer style={styles.container}>
        <MFStatusBar backgroundColor={teal} barStyle='light-content'/>
        <Tab.Navigator {...TabNavigatorConfig}>
          <Tab.Screen {...RouteConfigs['Decks']} />
          <Tab.Screen {...RouteConfigs['AddDeck']} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
