import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';
import Constants from 'expo-constants';
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
                        Events
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
                        html: '<iframe src="https://calendar.google.com/calendar/b/4/embed?height=600&amp;wkst=1&amp;bgcolor=%23F6BF26&amp;ctz=America%2FNew_York&amp;src=OW1rZm5tNXVva2UxcDFta2RrZW51aDdlbWtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23616161&amp;mode=AGENDA&amp;showTz=0&amp;showCalendars=0&amp;showTabs=0&amp;showPrint=0&amp;showTitle=0" style="border-width:0" height="100%" width="100%" frameborder="1" scrolling="no"></iframe>'
                    }}/>
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
    }
});

export default CalendarScreen;
