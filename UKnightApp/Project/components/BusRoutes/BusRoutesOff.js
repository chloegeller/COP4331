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

class BusRoutesOff extends React.Component {
    static navigationOptions = {
        title: 'Off Campus Routes',
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
                                onPress={() => this.props.navigation.navigate('Profile')}
                                title="Profile"
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
                            Shuttle Routes

                        </Text>
                        <Text
                            style={{
                            fontSize: 5,
                            color: 'black',
                            textAlign: 'left'
                        }}>
                            {"\n"}

                        </Text>
                        <Text
                            style={{
                            fontSize: 20,
                            color: '#eeeeee',
                            textAlign: 'left',
                            fontWeight: 'bold'
                        }}>
                            Hours of operation: 6:30 a.m. - 10 p.m.

                        </Text>
                        <Text
                            style={{
                            fontSize: 15,
                            color: '#eeeeee',
                            textAlign: 'left',
                            fontWeight: 'bold'
                        }}>

                            Shuttles conclude at 8pm on Fridays.{"\n"}

                        </Text>

                        <Text
                            style={{
                            fontSize: 16,
                            color: '#eeeeee',
                            textAlign: 'left'
                        }}>
                            Student Union Routes{"\n"}

                            1: Knights Circle {"\n"}{"\n"}

                            Millican Hall Routes{"\n"}
                            2: College Station/Boardwalk{"\n"}
                            4: Engineering/Business{"\n"}
                            7: Ferrell Commons/RWC{"\n"}
                            12: Student Dorms{"\n"} {"\n"}

                            Transit Center Routes{"\n"}
                            3: The Verge/The Place at Alafaya{"\n"}
                            10: The Lofts/Orion on Orpington{"\n"}
                            11: The MArquee{"\n"}
                            14: Plaza on University{"\n"}
                            15: Collegiate Village Inn/Arden Villas{"\n"} {"\n"}

                            Health Center Routes{"\n"}
                            5: Village of Science Drive/Research Pavilion{"\n"}
                            9: Knights Landing/Research Park Stops{"\n"} {"\n"}

                            HPA Routes{"\n"}
                            6: Northgate Lates/Tivoli{"\n"}
                            8: Riverwind at Alafaya/The Station{"\n"}
                            13: NorthView{"\n"}
                        </Text>

                        <View style={{
                            flex: 1
                        }}></View>

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
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'space-around',
        backgroundColor: '#36393f',
        paddingBottom: 24
    },
    buttonTextBack: {
        backgroundColor: '#4b5058',
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

export default BusRoutesOff;