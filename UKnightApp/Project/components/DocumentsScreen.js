import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

class DocumentsScreen extends React.Component {
    static navigationOptions = {
        title: 'Documents',
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
                                color="#eeeeee"
                            />
                        </View>
                        <View style={{
                            flex: 0.5
                        }}></View>
                        <Text style={styles.headerText}>
                            Documents
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
                </View>
                <View  style={styles.body}>
                  <View style={{width: "60%"}}>
                    <Button style={styles.bodyButton}
                      onPress={() => this.props.navigation.navigate('Flow')}
                      title="CS Course Flowchart"
                    />
                    <Button style={styles.bodyButton}
                      onPress={() => this.props.navigation.navigate('Electives')}
                      title="CS Electives"
                    />
                    <Button style={styles.bodyButton}
                      onPress={() => this.props.navigation.navigate('Brochure')}
                      title="CS Brochure"
                    />
                    <Button style={styles.bodyButton}
                      onPress={() => this.props.navigation.navigate('Override')}
                      title="CECS Override"
                    />
                  </View>
                  <View style={{flex: 0.5}}/>
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
        flex: 1,
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2e3a41',
    },
    bodyButton: {
        color: '#f8c700',
    },
    buttonTextBack: {
        backgroundColor: '#586d78',
        alignItems: 'center',
        top: '60%',
        height: 40
    }
});

export default DocumentsScreen;
