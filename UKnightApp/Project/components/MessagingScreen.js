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
                backgroundColor: '#32333d'
            }}>
                <View
                    style={{
                    flex: 1,
                    flexDirection: 'column'
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
                            Messages
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
                        <View>
                            <Text
                                style={{
                                fontSize: 22,
                                color: '#eeeeee',
                                textAlign: 'center'
                            }}>
                                If you would like to use this feature, {"\n"}please login :)
                            </Text>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.props.navigation.navigate('LogIn')}>
                                <Text style={styles.buttonText}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text
                                style={{
                                fontSize: 22,
                                color: '#eeeeee',
                                textAlign: 'center'
                            }}>
                                If you don't have an account,{"\n"}and would like to use this feature,{"\n"}
                                you can make one by signing up! :)
                            </Text>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.props.navigation.navigate('SignUp')}>
                                <Text style={styles.buttonText}>Sign Up</Text>
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
        marginTop: 30,
        marginBottom: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingVertical: 5,
        alignItems: 'center',

        backgroundColor: '#f8c700',
        borderColor: '#F6820D',
        borderWidth: 1,
        borderRadius: 5,
        width: 200
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#32333d'

    }
});

export default MessagingScreen;
