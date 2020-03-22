import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';
class BusScreen extends React.Component {
    static navigationOptions = {
        title: 'Bus Routes',
        headerTintColor: '#ffffff',
        headerStyle: {
            backgroundColor: '#000000'
        }
    };

    render() {
        return (
            <View
                style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: '#292b2f'
            }}>
                <View style={styles.header}>
                    <View style={styles.menuButton}>
                        <Button
                            onPress={() => this.props.navigation.navigate('Home_LI')}
                            title="Back"
                            color="#eeeeee"/>
                    </View>
                    <View style={{
                        flex: 0.5
                    }}></View>
                    <Text style={styles.headerText}>
                        Buses
                    </Text>
                    <View style={{
                        flex: 0.5
                    }}></View>
                    <View style={styles.loginButton}>
                        <Button
                            onPress={() => this.props.navigation.navigate('Settings')}
                            title="Settings"
                            color="#eeeeee"/>
                    </View>
                </View>

                <View style={styles.body}>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('BusOn')}>
                            <Text style={styles.buttonText}>Pegasus Express</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('BusOff')}>
                            <Text style={styles.buttonText}>
                                Shuttle Routes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => WebBrowser.openBrowserAsync("https://ucf.crystal-tod.com/rider/")}>
                            <Text style={styles.buttonText}>Live Shuttle Tracker</Text>
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
        marginTop: Constants.statusBarHeight,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#292b2f',
        alignItems: 'center'
    },
    headerVerticalCenter: {
        flexDirection: 'row',
        height: '100%',
        alignItems: 'center'
    },
    menuButton: {
        flex: 1
    },
    headerText: {
        color: '#f8c700',
        fontSize: 40,
        fontWeight: 'bold'
    },
    loginButton: {
        flex: 1
    },
    body: {
        flex: 8,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor: '#36393f',
        paddingBottom: 24
    },
    buttonTextBack: {
        backgroundColor: '#4b5058',
        alignItems: 'center',
        top: '60%',
        height: 40
    },
    btnContainer: {
        flexDirection: 'column',
    },
    button: {
        // flex: 1,
        margin: 24,
        padding: 24, 
        alignItems: 'center',
        backgroundColor: '#4b5058',
        borderColor: '#f8c700',
        //borderWidth: 1,
        borderRadius: 12,
    
    },
    buttonText: {
        textAlign: 'center',
        color: '#eeeeee',
        //ustifyContent: 'space-evenly',
        fontSize: 24,
        // fontWeight: 'bold'
    }
});

export default BusScreen;
