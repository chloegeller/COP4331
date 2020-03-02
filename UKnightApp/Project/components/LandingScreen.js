import 'jest-enzyme';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableWithoutFeedback} from 'react-native';

class LandingScreen extends React.Component {
  static navigationOptions = {
    title: '',
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Home')}>
        <View style={styles.container1}>
          {/* <Text style={styles.heading}>UKnight</Text> */}
          {/* <View style={styles.container2}> */}
            <Image style={styles.logo} source={require('../assets/UKnight_icon5.png')} />
          </View>
        {/* </View> */}
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#283747',
    alignItems: 'center',
    padding: 30,
  },

  // container2: {
  //   backgroundColor: 'black',
  //   height: 400,
  //   width: 300,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },

  // heading: {
  //   fontSize: 72,
  //   paddingTop: 48,
  //   margin: 48,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  //   color: 'white',
  // },

  logo: {
    height: 540,
    width: 250,
    alignItems: 'center',
  }
});

export default LandingScreen;
