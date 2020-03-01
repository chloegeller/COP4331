import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

class HomeScreen extends React.Component {

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
        <View style = {{flex: 1, flexDirection: 'row'}}>
          <View style = {{ flex: 8}}></View>
          <Button
            onPress={() => this.props.navigation.navigate('LogIn')}
            title="     Log in     "
            color="#808080"
          />
          <View style = {{ flex: 1}}></View>
        </View>
        <View style = {{ flex: 1}}></View>
        <View style = {{ flex: 3, flexDirection: 'row'}}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('BusScreen')}>
                <Text style={styles.buttonText}>Bus Routes</Text>
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

export default HomeScreen;
