import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#000000',
    },
    headerRight: () => (
      <Button
        onPress={() => alert('This will bring you to a log in screen once we have one.')}
        title="Log in"
        color="#808080"
      />
    )
    // headerLeft: 
  };

  render() {
    return (
      <View style = {{ flex: 1, flexDirection: 'column', backgroundColor: '#ba9b37'}}>
        <View style = {{ flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={styles.buttonText}>Button text{"\n\n"}Replace with image</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={styles.buttonText}>Button text{"\n\n"}Replace with image</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={styles.buttonText}>Button text{"\n\n"}Replace with image</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={styles.buttonText}>Button text{"\n\n"}Replace with image</Text>
          </TouchableOpacity>
        </View>
        <View style = {{ flex: 6}}>
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
  // container: {
  //   flex: 1
  // }
});

export default HomeScreen;
