
import React, {useState} from 'react';

import { Text, View, Image, StatusBar, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createSwitchNavigator } from 'react-navigation';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import HomeScreen from './components/Home/HomeScreen';
import HomeScreen_LoggedIn from './components/Home/HomeScreen_LoggedIn';
import LandingScreen from './components/LandingScreen';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import BusRoutesOff from './components/BusRoutes/BusRoutesOff';
import BusRoutesOn from './components/BusRoutes/BusRoutesOn';
import BusScreen from './components/BusRoutes/BusScreen';
import StudyBuddyScreen from './components/StudyBuddyScreen';
import DiscountsScreen from './components/DiscountsScreen';
import CalendarScreen from './components/CalendarScreen';
import DocScreen from './components/DocumentsScreen';
import SetScreen from './components/SettingsScreen';
import ProfileScreen from './components/ProfileScreen';
import MessagingScreen from './components/MessagingScreen';
import Constants from 'expo-constants';

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
  Discounts: DiscountsScreen,
  Calendar: CalendarScreen,
  Docs: DocScreen,
  Settings: SetScreen,
  Profile: ProfileScreen,
  Messaging: MessagingScreen,
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