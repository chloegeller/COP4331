import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import FireBase from '../config/FireBase'
import db from '../config/FireBase'

class HomeScreen_LoggedIn extends React.Component {

  componentDidMount = () => {
    // When the user accesses the loggen in screen, adds their information to the database
    FireBase.auth().onAuthStateChanged(user => {
      if (user) {
        let uid = user.uid;
        let email = user.email;
        db.collection("users").add({
          email: email,
          uid: uid
        })
      }
    })
  }

  static navigationOptions = {
    title: 'Home',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#000000',
    }
  };

  render() {
    return (
      <View style = {{ flex: 1, flexDirection: 'column', backgroundColor: '#ba9b37'}}>
      <View style = {{flex: 1}} />
        <View style = {{ flex: 1}}>
          <Text> Hey! You're Logged in! </Text>
        </View>
        <View style = {{ flex: 3, flexDirection: 'row'}}>
         <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.replace('Bus')}>
                <Text style={styles.buttonText}>Bus Routes{"\n\n"}Replace with image</Text>
         </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Home_LI')}>
              <Text style={styles.buttonText}>Button text{"\n\n"}Replace with image</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Home_LI')}>
              <Text style={styles.buttonText}>Button text{"\n\n"}Replace with image</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Home_LI')}>
              <Text style={styles.buttonText}>Button text{"\n\n"}Replace with image</Text>
          </TouchableOpacity>
        </View>
        <View style = {{ flex: 18}}>
          {/*This one stops the buttons from stretching to the bottom of the screen*/}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#505050'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white'
  }
});

export default HomeScreen_LoggedIn;
