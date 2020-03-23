import React from 'react'
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native'
import FireBase from '../config/FireBase'
import Constants from 'expo-constants';
class Signup extends React.Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

    handleSignUp = () => {
        const {email, password} = this.state
        FireBase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('Home_LI'))
            .catch(error => console.log(error))
    }

    render() {
        return (
            <View
                style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: '#292b2f'
            }}>
                <View style={styles.container}>
                    <Button
                        onPress={() => this.props.navigation.navigate('LogIn')}
                        title="Back"
                        color="#eeeeee"/>
                    <TextInput
                        style={styles.inputBox}
                        value={this.state.name}
                        onChangeText={name => this.setState({name})}
                        placeholder='Full Name'
                        placeholderTextColor="#eeeeee"
                        // color="#eeeeee"
                        />
                        
                    <TextInput
                        style={styles.inputBox}
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}
                        placeholder='Email'
                        placeholderTextColor="#eeeeee"
                        autoCapitalize='none'
                        color="#eeeeee"/>
                    <TextInput
                        style={styles.inputBox}
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}
                        placeholder='Password'
                        placeholderTextColor="#eeeeee"
                        secureTextEntry={true}
                        color="#eeeeee"/>
                    <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#36393f',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: '#eeeeee',
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#f8c700',
        //borderColor: '#FFA611',
        //borderWidth: 1,
        borderRadius: 10,
        width: 200
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#292b2f'
    },
    buttonSignup: {
        fontSize: 12
    }
})

export default Signup
