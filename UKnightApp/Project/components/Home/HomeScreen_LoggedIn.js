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
import FireBase from '../../config/FireBase'
import db from '../../config/FireBase'
import Constants from 'expo-constants';

class HomeScreen_LoggedIn extends React.Component {

    componentDidMount = () => {
        // When the user accesses the logged in screen, adds their information to the
        // database

        FireBase
            .auth()
            .onAuthStateChanged((user) => {
                if (user != null) {
                    alert("We are authenticated now!")
                    alert("About to write email to UserId: " + user.uid + " in the database")

                    // This is exactly the syntax used in every tutorial I have found. Expo's,
                    // google's, random internet guy's, all of them. It still doesn't actually work.
                    db
                        .ref('users/' + user.uid)
                        .set({email: user.email}),
                    function (error) {
                        // The Promise was rejected. Before including this it would sometimes yell at me
                        // for not handling it, but usually it would just not do anything at all,
                        // silently not doing what I tell it to do. The authentication works great, I
                        // don't understand why the database using the same package, logged in with
                        // itself, won't work.
                        console.error(error);
                    };
                    alert("Right after database call. I wish it would get here, sigh...")
                }
            })
    }

    static navigationOptions = {
        title: 'Home',
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
                                onPress={() => alert("Pressed menu button!")}
                                title="Menu"
                                color="#eeeeee"/>
                        </View>
                        <View style={{
                            flex: 0.5
                        }}></View>
                        <Text style={styles.headerText}>uKnight</Text>
                        <View style={{
                            flex: 0.5
                        }}></View>
                        <View style={styles.loginButton}>
                            <Button
                                onPress={() => this.props.navigation.navigate('Profile')}
                                title="Profile"
                                color="#eeeeee"/>
                        </View>
                    </View>
                    <View style={styles.body}>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.props.navigation.navigate('BusScreen')}>
                                <ImageBackground
                                    source={require('../../assets/shuttleImage.jpg')}
                                    style={{
                                    width: '100%',
                                    height: '100%'
                                }}>
                                    <View style={styles.buttonTextBack}>
                                        <Text style={styles.buttonText}>Bus Routes</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.props.navigation.navigate('StudyBuddy')}>
                                <ImageBackground
                                    source={require('../../assets/studyImage.jpg')}
                                    style={{
                                    width: '100%',
                                    height: '100%'
                                }}>
                                    <View style={styles.buttonTextBack}>
                                        <Text style={styles.buttonText}>Study Buddy{"\n\n"}</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.props.navigation.navigate('Discounts')}>
                                <ImageBackground
                                    source={require('../../assets/discountImage.jpeg')}
                                    style={{
                                    width: '100%',
                                    height: '100%'
                                }}>
                                    <View style={styles.buttonTextBack}>
                                        <Text style={styles.buttonText}>Discounts{"\n\n"}</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.props.navigation.navigate('Calendar')}>
                                <ImageBackground
                                    source={require('../../assets/calendarImage.jpg')}
                                    style={{
                                    width: '100%',
                                    height: '100%'
                                }}>
                                    <View style={styles.buttonTextBack}>
                                        <Text style={styles.buttonText}>Events{"\n\n"}</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.props.navigation.navigate('Docs')}>
                                <ImageBackground
                                    source={require('../../assets/docsImage.png')}
                                    style={{
                                    width: '100%',
                                    height: '100%'
                                }}>
                                    <View style={styles.buttonTextBack}>
                                        <Text style={styles.buttonText}>Documents</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.props.navigation.navigate('Settings')}>
                                <ImageBackground
                                    source={require('../../assets/settingsImage.png')}
                                    style={{
                                    width: '100%',
                                    height: '100%'
                                }}>
                                    <View style={styles.buttonTextBack}>
                                        <Text style={styles.buttonText}>Settings</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
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
        backgroundColor: '#32333d',
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
        fontSize: 40,
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
        backgroundColor: '#2e3a41',
        paddingBottom: 30
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // alignItems: 'center',
        height: '33.33%'
    },
    button: {
        // marginTop: 30, marginBottom: 30,
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderWidth: 1,
        //borderRadius: 5,
        width: '50%',
        //alignItems: 'center',
        borderColor: '#f8c700',
        //borderWidth: 1,
        borderRadius: 12
        //alignItems: 'center',
    },
    buttonTextBack: {
        backgroundColor: '#586d78',
        alignItems: 'center',
        top: '83%',
        height: 40
    },
    buttonText: {
        color: '#eeeeee',
        fontSize: 30,
        fontWeight: 'bold'
    }
});

export default HomeScreen_LoggedIn;
