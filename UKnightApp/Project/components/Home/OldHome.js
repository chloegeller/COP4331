
import React from 'react';
import {StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity} from 'react-native';

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
        <View style = {{flex: 2}} />
        <View style = {{flex: 1, flexDirection: 'row'}}>
          <View style = {{ flex: 15}}></View>
          <Button style={styles.loginButton}
            onPress={() => this.props.navigation.navigate('LogIn')}
            title="     Log in     "
            color="#808080"
          />
          <View style = {{ flex: 1}}></View>
        </View>
        <View style = {{ flex: 1}}></View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('BusScreen')}>
              <ImageBackground source={require('../../assets/shuttleImage.jpg')} style={{width: '100%', height: '100%'}}>
                <Text style={styles.buttonText}>Bus Routes</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('StudyBuddy')}>
              <ImageBackground source={require('../../assets/studyImage.jpg')} style={{width: '100%', height: '100%'}}>
                <Text style={styles.buttonText}>Study Buddy{"\n\n"}</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Discounts')}>
              <ImageBackground source={require('../../assets/discountImage.jpeg')} style={{width: '100%', height: '100%'}}>
                <Text style={styles.buttonText}>Student Discounts{"\n\n"}</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Calendar')}>
              <ImageBackground source={require('../../assets/calendarImage.jpg')} style={{width: '100%', height: '100%'}}>
                <Text style={styles.buttonText}>Event Calendar{"\n\n"}</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Docs')}>
              <ImageBackground source={require('../../assets/docsImage.png')} style={{width: '100%', height: '100%'}}>
                <Text style={styles.buttonText}>Useful Documents</Text>
              </ImageBackground>
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
    loginButton: {
      top: 30
    },
    button: {
        width: '50%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    buttonContainer: {
      flexDirection: 'row',
      top: 50
    },
    buttonText: {
        textAlign: 'center',
        position: 'absolute',
        color: 'brown',
        fontSize: 30,
        fontWeight: 'bold'
    },
    container: {
        flex: 1
    }
});

export default HomeScreen;
