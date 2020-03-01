import React from 'react';
import { Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './components/HomeScreen';
import HomeScreen_LoggedIn from './components/HomeScreen_LoggedIn';
import LandingScreen from './components/LandingScreen';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import BusRoutesOff from './components/BusRoutesOff';
import BusRoutesOn from './components/BusRoutesOn';
import BusScreen from './components/BusScreen';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Home_LI: HomeScreen_LoggedIn,
  Land: LandingScreen,
  LogIn: LogIn,
    SignUp: SignUp,
    BusScreen: BusScreen,
    BusOn: BusRoutesOn,
    BusOff: BusRoutesOff,
},{
  initialRouteName: 'Land',
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {

  render() {
    return <AppContainer />;
  }
}
