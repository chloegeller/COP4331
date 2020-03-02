
import React from 'react';
import { Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createSwitchNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import HomeScreen_LoggedIn from './components/HomeScreen_LoggedIn';
import LandingScreen from './components/LandingScreen';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import BusRoutesOff from './components/BusRoutesOff';
import BusRoutesOn from './components/BusRoutesOn';
import BusScreen from './components/BusScreen';

const AppNavigator = createSwitchNavigator({
  Home: HomeScreen,
  Home_LI: HomeScreen_LoggedIn,
  Land: LandingScreen,
  LogIn: LogIn,
  SignUp: SignUp,
  BusScreen: BusScreen,
  BusOn: BusRoutesOn,
  BusOff: BusRoutesOff,
  StudyBuddy: StudyBuddyScreen,
},{
  initialRouteName: 'Land',
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
