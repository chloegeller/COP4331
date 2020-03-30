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
import StudyBuddyScreen from './components/StudyBuddy/StudyBuddyScreen';
import CourseScreen from './components/StudyBuddy/CourseScreen';
import StudyPartnerScreen from './components/StudyBuddy/StudyPartnerScreen';
import DiscountsScreen from './components/DiscountsScreen';
import CalendarScreen from './components/CalendarScreen';
import DocScreen from './components/DocumentsScreen';
import SetScreen from './components/SettingsScreen';
import ProfileScreen from './components/ProfileScreen';
import MessagingScreen from './components/Messages/MessagingScreen';
//import MessagingScreen_LI from './components/Messages/MessagingScreen_LoggedIn';

import Constants from 'expo-constants';
import FlowchartScreen from './components/Docs/FlowchartScreen';
import ElectivesScreen from './components/Docs/ElectivesScreen';
import BrochureScreen from './components/Docs/BrochureScreen';
import OverrideScreen from './components/Docs/OverrideScreen';

import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas, fab } from "@fortawesome/fontawesome-svg-core";
import { faBus } from '@fortawesome/free-solid-svg-icons';

library.add(faBus)

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
  //Messaging_LI,
  Flow: FlowchartScreen,
  Electives: ElectivesScreen,
  Brochure: BrochureScreen,
  Override: OverrideScreen,
  Courses: CourseScreen,
  StudyPartner: StudyPartnerScreen,
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
