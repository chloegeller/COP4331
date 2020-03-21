import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';
import Constants from 'expo-constants';
class DiscountsScreen extends React.Component {
    static navigationOptions = {
        title: 'Discounts',
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
                                onPress={() => this.props.navigation.navigate('Home')}
                                title="Back"
                                color="#eeeeee"/>
                        </View>
                        <View style={{
                            flex: 0.5
                        }}></View>
                        <Text style={styles.headerText}>
                            Discounts
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
                        <WebView
                            source={{
                            uri: 'https://knightsdiscounts.wixsite.com/home/restaurants'
                        }}/>
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
        justifyContent: 'space-around',
        backgroundColor: '#36393f',
        paddingBottom: 24
    },
    buttonTextBack: {
        backgroundColor: '#4b5058',
        alignItems: 'center',
        top: '60%',
        height: 40
    }
});

export default DiscountsScreen;
