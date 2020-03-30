import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';
import Constants from 'expo-constants';
import * as WebBrowser from 'expo-web-browser';
class CalendarScreen extends React.Component {
    static navigationOptions = {
        title: 'Calendar',
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
                                color="#eeeeee"
                                alignItems='left'/>
                        </View>
                        <View style={{
                            flex: 0.2
                        }}></View>
                        <Text style={styles.headerText}>
                            Events
                        </Text>
                        <View style={{
                            flex: 0.2
                        }}></View>
                        <View style={styles.loginButton}>
                            <Button
                                onPress={() => this.props.navigation.navigate('Profile')}
                                title="Profile"
                                color="#eeeeee"/>
                        </View>
                    </View>
                    <View style={styles.body}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => WebBrowser.openBrowserAsync("https://events.ucf.edu/upcoming/")}>
                            <Text style={styles.buttonText}>Upcoming Events</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => WebBrowser.openBrowserAsync("https://events.ucf.edu/this-week/")}>
                            <Text style={styles.buttonText}>Weekly Update</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => WebBrowser.openBrowserAsync("https://www.ucf.edu/news/")}>
                            <Text style={styles.buttonText}>News</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => WebBrowser.openBrowserAsync("https://calendar.ucf.edu/2020/spring")}>
                            <Text style={styles.buttonText}>Academic Calendar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => WebBrowser.openBrowserAsync("https://calendar.google.com/calendar/embed?src=9mkfnm5uoke1p1mkdkenuh7emk%40grou" +
                                "p.calendar.google.com&ctz=America%2FNew_York")}>
                            <Text style={styles.buttonText}>Discounts</Text>
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
        flexDirection: 'column'
    },
    button: {
        // flex: 1,
        margin: 24,
        padding: 24,
        alignItems: 'center',
        backgroundColor: '#4b5058',
        borderColor: '#f8c700',
        borderWidth: 0.5,
        borderRadius: 12
    },
    buttonText: {
        textAlign: 'center',
        color: '#f8c700',
        //ustifyContent: 'space-evenly',
        fontSize: 24,
        fontWeight: 'bold'
    }
});

export default CalendarScreen;
