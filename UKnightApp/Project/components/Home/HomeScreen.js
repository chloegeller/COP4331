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
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

class HomeScreen extends React.Component {

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
                                    onPress={() => alert("Pressed menu button!")}
                                    title="Menu"
                                    color="#eeeeee"/>
                            </View>
                            <View
                                style={{
                                flex: 0.2
                            }}></View>
                            <Text style={styles.headerText}>uKnight</Text>
                            <View
                                style={{
                                flex: 0.2
                            }}></View>
                            <View style={styles.loginButton}>
                                <Button
                                    onPress={() => this.props.navigation.navigate('Settings')}
                                    title="Settings"
                                    color="#eeeeee"/>
                            </View>
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
                                    height: '100%',
                                    borderRadius: 12
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
                                    height: '100%',
                                    borderRadius: 12
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
                                    height: '100%',
                                    borderRadius: 12
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
                                    height: '100%',
                                    borderRadius: 12
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
                                    height: '100%',
                                    borderRadius: 12
                                }}>
                                    <View style={styles.buttonTextBack}>
                                        <Text style={styles.buttonText}>Documents</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.props.navigation.navigate('Messaging')}>
                                <ImageBackground
                                    source={require('../../assets/chatimg.png')}
                                    style={{
                                    width: '100%',
                                    height: '100%'
                                }}>
                                    <View style={styles.buttonTextBack}>
                                        <Text style={styles.buttonText}>Messaging{"\n\n"}</Text>
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
        backgroundColor: '#292b2f'
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
        backgroundColor: '#36393f',
        paddingBottom: 30
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // alignItems: 'center',
        height: '33.33%',
        overflow: 'hidden'
    },
    button: {
        // marginTop: 30, marginBottom: 30,
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderWidth: 0.6,
        //borderRadius: 5,
        width: '50%',
        //alignItems: 'center',
        borderColor: '#f8c700',
        //borderWidth: 1,
        borderRadius: 12
    },
    buttonTextBack: {
        backgroundColor: '#4b5058',
        alignItems: 'center',
        top: '82.5%',
        height: 40,
        justifyContent: 'space-around'
    },
    buttonText: {
        color: '#eeeeee',
        fontSize: 30,
        fontWeight: 'bold'
    },
    icon: {
        color: '#eeeeee'
    }
});

export default HomeScreen;
