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
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#ba9b37' }}>
                <View style={{ flex: 1.75, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}></View>
                    <Button
                        onPress={() => this.props.navigation.navigate('Home')}
                        title="  Back  "
                        color="#808080"
                    />
                    <View style={{ flex: 15 }}></View>

                </View>

                <View style={{ flex: 18 }}>
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

export default BusScreen;
