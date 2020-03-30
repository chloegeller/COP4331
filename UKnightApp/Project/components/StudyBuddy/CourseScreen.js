import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    ScrollView
} from 'react-native';
import Constants from 'expo-constants';
import Firebase from '../../config/FireBase';

class CourseScreen extends React.Component {


    // My attempt to use an array for this ran me into fatal errors on this page, and so I opted for 7 separate variables.
    // Maybe there is a way to do it with an array, and using an array would make expanding this much easier,
    // but I don't kow enough about javascript it seems.
    state = {
        colorCS1: "gray",
        colorCS2: "gray",
        colorOOP: "gray",
        colorID: "gray",
        colorSS: "gray",
        colorPOOSD: "gray",
        colorDCS: "gray"
    };

    coursePress = (n) => {
      if (n == 0) {
        if (this.state.colorCS1 == "gray")
          this.setState({colorCS1: "gold"})
        else
          this.setState({colorCS1: "gray"})
      }
      else if (n == 1) {
        if (this.state.colorCS2 == "gray")
          this.setState({colorCS2: "gold"})
        else
          this.setState({colorCS2: "gray"})
      }
      else if (n == 2) {
        if (this.state.colorOOP == "gray")
          this.setState({colorOOP: "gold"})
        else
          this.setState({colorOOP: "gray"})
      }
      else if (n == 3) {
        if (this.state.colorID == "gray")
          this.setState({colorID: "gold"})
        else
          this.setState({colorID: "gray"})
      }
      else if (n == 4) {
        if (this.state.colorSS == "gray")
          this.setState({colorSS: "gold"})
        else
          this.setState({colorSS: "gray"})
      }
      else if (n == 5) {
        if (this.state.colorPOOSD == "gray")
          this.setState({colorPOOSD: "gold"})
        else
          this.setState({colorPOOSD: "gray"})
      }
      else if (n == 6) {
        if (this.state.colorDCS == "gray")
          this.setState({colorDCS: "gold"})
        else
          this.setState({colorDCS: "gray"})
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
                                    onPress={() => this.props.navigation.navigate('StudyBuddy')}
                                    title="Back"
                                    color="#eeeeee"/>
                            </View>
                            {/* <View
                                style={{
                                flex: 0.5
                            }}></View> */}
                            <Text style={styles.headerText}>Courses</Text>
                            {/* <View
                                style={{
                                flex: 0.5
                            }}></View> */}
                            <View style={styles.loginButton}>
                                <Button
                                    onPress={() => this.props.navigation.navigate('Profile')}
                                    title="Profile"
                                    color="#eeeeee"/>
                            </View>
                        </View>
                    </View>
                    <View style={styles.body}>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.props.navigation.navigate('Courses')}>
                                <View style={styles.buttonTextBack}>
                                    <Text style={styles.buttonText}>Add Courses</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.list}>
                            <ScrollView>
                                <Button
                                    title="Computer Science I"
                                    color={this.state.colorCS1}
                                    onPress={() => this.coursePress(0)}>
                                </Button>
                                <Button
                                    title="Computer Science II"
                                    color={this.state.colorCS2}
                                    onPress={() => this.coursePress(1)}>
                                </Button>
                                <Button
                                    title="Object Oriented Programming"
                                    color={this.state.colorOOP}
                                    onPress={() => this.coursePress(2)}>
                                </Button>
                                <Button
                                    title="Intro to Discrete"
                                    color={this.state.colorID}
                                    onPress={() => this.coursePress(3)}>
                                </Button>
                                <Button
                                    title="Systems Software"
                                    color={this.state.colorSS}
                                    onPress={() => this.coursePress(4)}>
                                </Button>
                                <Button
                                    title="Processes for Object-Oriented Software Development"
                                    color={this.state.colorPOOSD}
                                    onPress={() => this.coursePress(5)}>
                                </Button>
                                <Button
                                    title="Discrete Computational Structures"
                                    color={this.state.colorDCS}
                                    onPress={() => this.coursePress(6)}>
                                </Button>
                            </ScrollView>
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
        //borderWidth: 1,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#eeeeee',
        fontSize: 36,
        fontWeight: 'bold'
    },
    list: {
        alignItems: 'center'
    }
});

export default CourseScreen;
