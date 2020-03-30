import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

class MessagingScreen extends React.Component {
    static navigationOptions = {
        title: 'Messaging Screen',
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
                <View
                    style={{
                    flex: 1,
                    flexDirection: 'column'
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
                            Messages
                        </Text>
                        <View style={{
                            flex: 0.5
                        }}></View>
                        <View style={styles.loginButton}>
                            <Button
                                onPress={() => this.props.navigation.navigate('Settings')}
                                title="Profile"
                                color="#eeeeee"/>
                        </View>
                    </View>
                    <View style={styles.body}>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.props.navigation.navigate('Contacts')}>

                                <Text style={styles.buttonText}>Contacts</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.props.navigation.navigate('Convos')}>
                                <Text style={styles.buttonText}>Conversations</Text>
                            </TouchableOpacity>
                        </View>
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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // alignItems: 'center',
        height: '25%',
        paddingVertical: 30
    },
    buttonTextBack: {
        backgroundColor: '#4b5058',
        alignItems: 'center',
        top: '60%',
        height: 40
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingVertical: 5,
        alignItems: 'center',

        backgroundColor: '#4b5058',
        borderColor: '#f8c700',

        borderWidth: 0.5,
        borderRadius: 12,
        width: '80%'
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#f8c700'

    }
});

export default MessagingScreen;
