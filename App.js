import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import DeckListView from "./components/DeckListView";
import AddDeckView from "./components/AddDeckView";
import IndividualDeckView from "./components/IndividualDeckView";
import AddCardView from './components/AddCardView'
import QuizView from "./components/QuizView";
import Constants from 'expo-constants';
import {teal, purple, white, lightPurple} from "./utils/colors";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from './reducers'

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

const TabNav = () => (
  <Tab.Navigator {...TabNavigatorConfig}>
    <Tab.Screen {...RouteConfigs['Decks']} />
    <Tab.Screen {...RouteConfigs['AddDeck']} />
  </Tab.Navigator>
);

// Config for StackNav
const StackNavigatorConfig = {
  screenOptions: {
    options: {
      headerMode: 'screen',
    }
  }
};
const StackConfig = {
  TabNav: {
    name: 'Home',
    component: TabNav,
    options: { headerShown: false },
  },
  IndividualDeck: {
    name: 'IndividualDeck',
    component: IndividualDeckView,
    options: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
      title: 'Deck',
    },
  },
  AddCard: {
    name: 'AddCard',
    component: AddCardView,
    options: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
      title: 'Add Card',
    },
  },
  QuizView: {
    name: 'QuizView',
    component: QuizView,
    options: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
      title: 'Quiz',
    },
  },
};
const Stack = createStackNavigator();
const MainNav = () => (
  <Stack.Navigator {...StackNavigatorConfig}>
    <Stack.Screen {...StackConfig['TabNav']} />
    <Stack.Screen {...StackConfig['IndividualDeck']} />
    <Stack.Screen {...StackConfig['AddCard']} />
    <Stack.Screen {...StackConfig['QuizView']} />
  </Stack.Navigator>
);

export default class App extends React.Component {
  render() {
    const store = createStore(reducer);

    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <MFStatusBar backgroundColor={teal} barStyle='light-content'/>
          <NavigationContainer style={styles.container}>
            <MainNav/>
          </NavigationContainer>
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
