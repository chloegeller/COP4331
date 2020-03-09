import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

class BusScreen extends React.Component {
    static navigationOptions = {
        title: 'Study Buddy',
        headerTintColor: '#ffffff',
        headerStyle: {
            backgroundColor: '#000000',
        }
    };

    navToAppropriateHomeScreen = () => {
      var user = firebase.auth().currentUser;

      if (user) {
        // User is signed in.
        this.props.navigation.navigate('Home_LI')
      } else {
        // No user is signed in.
        this.props.navigation.navigate('Home')
      }
    }

    render() {
        return (
<<<<<<< HEAD
          <View style = {{flex: 1, flexDirection: 'column'}}>
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
              <Text style = {styles.headerText}>  Events  </Text>
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
=======
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#ba9b37' }}>
                <View style={{ flex: 1.75, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <Button
                        onPress={this.navToAppropriateHomeScreen()}
                        title="  Back  "
                        color="#808080"
                    />
                    <View style={{ flex: 15 }}></View>

                </View>
>>>>>>> c9bcfa37ff717f13c0b1646b5c3449716de86b70

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
});

export default BusScreen;
