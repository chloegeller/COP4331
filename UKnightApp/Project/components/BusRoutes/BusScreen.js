import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

class BusScreen extends React.Component {
    static navigationOptions = {
        title: 'Bus Routes',
        headerTintColor: '#ffffff',
        headerStyle: {
            backgroundColor: '#000000',
        }
    };

    render() {
        return (
          <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#ba9b37' }}>
            <View style = {styles.header}>
              <View style = {styles.menuButton}>
                <Button
                  onPress={() => this.props.navigation.navigate('Home')}
                  title="     Back     "
                  color="#808080"
                />
              </View>
              <View style = {{flex:0.5}}>
              </View>
              <Text style = {styles.headerText}>   Buses   </Text>
              <View style = {{flex:0.5}}>
              </View>
              <View style = {styles.loginButton}>
                <Button
                  onPress={() => this.props.navigation.navigate('LogIn')}
                  title="     Log in     "
                  color="#808080"
                />
              </View>
            </View>

            <View style={styles.body}>
              <View style={{ flex: 2 }}></View>

              <View style={{ flex: 4, flexDirection: 'row' }}>

                  <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('BusOn')}>
                      <Text style={styles.buttonText}>On Campus{"\n\n"}Bus Routes</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('BusOff')}>
                      <Text style={styles.buttonText}> Off Campus{"\n\n"} Bus Routes</Text>
                  </TouchableOpacity>

              </View>
              <View style={{ flex: 4, flexDirection: 'row' }}>

                  <TouchableOpacity style={styles.button} onPress={() => WebBrowser.openBrowserAsync("https://ucf.crystal-tod.com/rider/")}>
                      <Text style={styles.buttonText}>Live Shuttle Tracker</Text>
                  </TouchableOpacity>

                  <View style = {{flex: 1}}>
                  </View>

              </View>
              <View style={{ flex: 14 }}>
                  {/*This one stops the buttons from stretching to the bottom of the screen*/}
              </View>
            </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'center',
  },
  menuButton: {
    flex: 1,
  },
  headerText: {
    color: '#ffc904',
    fontSize: 32,
    fontWeight: 'bold',
  },
  loginButton: {
    flex: 1,
  },
  body: {
    flex: 8,
    flexDirection: 'column',
    backgroundColor: '#ba9b37'
  },
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

export default BusScreen;
