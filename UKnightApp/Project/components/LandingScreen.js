import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';

class LandingScreen extends React.Component {
  static navigationOptions = {
    title: '',
    headerShown: false,
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.props.navigation.replace('Home')}>
        <View style={styles.container1}>
          {/* <Text style={styles.heading}>UKnight</Text> */}
          {/* <View style={styles.container2}> */}
            <Image style={styles.logo} source={require('../assets/UKnight2.png')} />
          </View>
        {/* </View> */}
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#454545',
    alignItems: 'center',
    padding: 10,
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
    height: 500,
    width: 500,
  }
});

export default LandingScreen;
