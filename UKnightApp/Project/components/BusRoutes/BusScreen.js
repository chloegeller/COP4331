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
                backgroundColor: '#32333d'
            }}>
                <View style={styles.header}>
                    <View style={styles.menuButton}>
                        <Button
                            onPress={() => this.props.navigation.navigate('Home')}
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
                            onPress={() => this.props.navigation.navigate('LogIn')}
                            title="Login"
                            color="#eeeeee"/>
                    </View>
                </View>

                <View style={styles.body}>
                    <View style={{
                        flex: 2
                    }}></View>

                    <View
                        style={{
                        flex: 4,
                        flexDirection: 'row'
                    }}>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('BusOn')}>
                            <Text style={styles.buttonText}>On-Campus:{"\n\n"}Pegasus Express</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('BusOff')}>
                            <Text style={styles.buttonText}>
                                Off-Campus:{"\n\n"}
                                Shuttle Routes</Text>
                        </TouchableOpacity>

                    </View>
                    <View
                        style={{
                        flex: 4,
                        flexDirection: 'row'
                    }}>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => WebBrowser.openBrowserAsync("https://ucf.crystal-tod.com/rider/")}>
                            <Text style={styles.buttonText}>Live Shuttle Tracker</Text>
                        </TouchableOpacity>

                        <View style={{
                            flex: 1
                        }}></View>

                    </View>
                    <View style={{
                        flex: 14
                    }}>
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
        marginTop: Constants.statusBarHeight,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#32333d',
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
        justifyContent: 'space-around',
        backgroundColor: '#2e3a41',
        paddingBottom: 24
    },
    buttonTextBack: {
        backgroundColor: '#586d78',
        alignItems: 'center',
        top: '60%',
        height: 40
    },
    button: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
        backgroundColor: '#505050',
        borderColor: '#f8c700',
        borderWidth: 1,
        borderRadius: 5
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
    }
});

export default BusScreen;