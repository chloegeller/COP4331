import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ImageBackground,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import Constants from 'expo-constants';

class StudyBuddyScreen extends React.Component {

    static navigationOptions = {
        title: 'StudyBuddyScreen',
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
                        <View style={styles.headerVerticalCenter}>
                            <View style={styles.menuButton}>
                                <Button
                                    onPress={() => this.props.navigation.navigate('Home_LI')}
                                    title="Back"
                                    color="#eeeeee"/>
                            </View>
                            {/* <View
                                style={{
                                flex: 0.5
                            }}></View> */}
                            <Text style={styles.headerText}>StudyBuddy</Text>
                            {/* <View
                                style={{
                                flex: 0.5
                            }}></View> */}
                            <View style={styles.loginButton}>
                                <Button onPress={() => this.props.navigation.navigate('Profile')} title="Profile" color="#eeeeee" // justifyContent="space-around"
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.body}>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.props.navigation.navigate('Courses')}>
                                <View style={styles.buttonTextBack}>
                                    <Text style={styles.buttonText}>Courses</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.props.navigation.navigate('StudyPartner')}>
                                <View style={styles.buttonTextBack}>
                                    <Text style={styles.buttonText}>Find study partners</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                            flex: 0.5
                        }}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    statusBar: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    header: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#292b2f',
        // alignItems: 'center',
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
        fontSize: 38,
        fontWeight: 'bold',
        alignItems: 'center'
    },
    loginButton: {
        flex: 1
    },
    body: {
        flex: 8,
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#36393f',
        paddingBottom: 30
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        //alignItems: 'center',
        height: '25%',
        paddingVertical: 30
    },
    button: {
        // marginTop: 30, marginBottom: 30,
        backgroundColor: '#4b5058',
        paddingVertical: 5,
        paddingHorizontal: 5,
        //borderWidth: 1, borderRadius: 5,
        width: '80%',
        //alignItems: 'center',
        borderColor: '#f8c700',
        borderWidth: 0.5,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#f8c700',
        fontSize: 24,
        fontWeight: 'bold'
    }
});

export default StudyBuddyScreen;
