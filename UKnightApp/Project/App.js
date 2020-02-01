import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './components/HomeScreen';
import LandingScreen from './components/LandingScreen';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Land: LandingScreen,
},{
  initialRouteName: 'Land',
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#ba9b37',
    alignItems: 'center',
    padding: 10,
  },

  container2: {
    backgroundColor: 'black',
    height: 400,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },

  heading: {
    fontSize: 72,
    paddingTop: 48,
    margin: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },

  logo: {
    height: 300,
    width: 250,
  },
});
