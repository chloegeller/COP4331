import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import PDFReader from 'rn-pdf-reader-js';
import Constants from 'expo-constants';

class FlowchartScreen extends React.Component {
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
                                onPress={() => this.props.navigation.navigate('Docs')}
                                title="Back"
                                color="#eeeeee"/>
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
                    <View style={styles.body}>
                        <PDFReader
                            source={{
                            uri: 'http://www.cecs.ucf.edu/web/wp-content/uploads/2019/05/2019-20-Computer-Science-Flow-Chart.pdf'
                        }}/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        flexDirection: 'row',
        backgroundColor: '#292b2f',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    menuButton: {
        flex: 1
    },
    headerText: {
        color: '#f8c700',
        fontSize: 32,
        fontWeight: 'bold'
    },
    loginButton: {
        flex: 1
    },
    body: {
        flex: 8,
        flexDirection: 'column',
        backgroundColor: '#36393f'
    }
});

export default FlowchartScreen;
