import React from 'react';
import {StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity} from 'react-native';
import FireBase from '../../config/FireBase'

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
      <View style = {{flex: 1, flexDirection: 'column'}}>
        <View style = {styles.header}>
          <View style = {styles.menuButton}>
            <Button
              onPress={() => alert("Pressed menu button!")}
              title="     Menu     "
              color="#808080"
            />
          </View>
          <View style = {{flex:0.5}}>
          </View>
          <Text style = {styles.headerText}>UKnight</Text>
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
        <View style = {styles.body}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('BusScreen')}>
              <ImageBackground source={require('../../assets/shuttleImage.jpg')} style={{width: '100%', height: '100%'}}>
                <View style = {styles.buttonTextBack}>
                  <Text style={styles.buttonText}>Bus Routes</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('StudyBuddy')}>
              <ImageBackground source={require('../../assets/studyImage.jpg')} style={{width: '100%', height: '100%'}}>
                <View style = {styles.buttonTextBack}>
                  <Text style={styles.buttonText}>Study Buddy{"\n\n"}</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Discounts')}>
              <ImageBackground source={require('../../assets/discountImage.jpeg')} style={{width: '100%', height: '100%'}}>
                <View style = {styles.buttonTextBack}>
                  <Text style={styles.buttonText}>Discounts{"\n\n"}</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Calendar')}>
              <ImageBackground source={require('../../assets/calendarImage.jpg')} style={{width: '100%', height: '100%'}}>
                <View style = {styles.buttonTextBack}>
                  <Text style={styles.buttonText}>Events{"\n\n"}</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Docs')}>
              <ImageBackground source={require('../../assets/docsImage.png')} style={{width: '100%', height: '100%'}}>
                <View style = {styles.buttonTextBack}>
                  <Text style={styles.buttonText}>Documents</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
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
    fontSize: 48,
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
  buttonContainer: {
    flexDirection: 'row',
    height: '33.33%'
  },
  button: {
    width: '50%',
  },
  buttonTextBack: {
    backgroundColor: 'black',
    alignItems: 'center',
    top: '40%',
    height: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
