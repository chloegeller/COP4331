import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    Button,
    TouchableOpacity
} from 'react-native';
import Constants from 'expo-constants';

class BusRoutesOn extends React.Component {
    static navigationOptions = {
        title: 'On Campus Routes',
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
                                onPress={() => this.props.navigation.navigate('BusScreen')}
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
                        <Text
                            style={{
                            fontSize: 30,
                            color: '#f8c700',
                            textAlign: 'center'
                        }}>
                            Pegasus Express Routes

                        </Text>
                        <Text
                            style={{
                            fontSize: 15,
                            color: 'black',
                            textAlign: 'left'
                        }}>
                            {"\n"}

                        </Text>
                        <Text
                            style={{
                            fontSize: 15,
                            color: '#eeeeee',
                            textAlign: 'left'
                        }}>
                            Spring/Fall Hours: 7am - 7pm {"\n"}
                            Summer Hours: 7am - 4pm {"\n"}

                        </Text>

                        <Text
                            style={{
                            fontSize: 12,
                            color: '#eeeeee',
                            textAlign: 'left'
                        }}>

                            1: Student Union {"\n"}
                            2 : Lake Claire Community{"\n"}
                            3: Addition Arena/Towers {"\n"}
                            4 : Engineering/Business{"\n"}
                            5: Physical Sciences/Health Center {"\n"}
                            6 : Student Dorms{"\n"}
                            7: Ferrell Commons/RWC {"\n"}
                            8 : Student Dorms{"\n"}
                            9: Library/Apollo Community {"\n"}
                            10 : Teaching Academy{"\n"}
                            11: Lynx Transit Center {"\n"}
                        </Text>
                        <View
                            style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <Image
                                style={{
                                maxWidth: '100%'
                            }}
                                source={require('../../assets/shuttlemaps18.png')}/>
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
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'space-around',
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
        borderColor: '#eeeeee',
        borderWidth: 1,
        borderRadius: 5
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
    }
});

export default BusRoutesOn;
