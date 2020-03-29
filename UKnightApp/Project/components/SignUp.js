import React from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import FireBase from '../config/FireBase';
import {showMessage} from 'react-native-flash-message';
import validateForm from '../tests/validation';
import Constants from 'expo-constants';
class Signup extends React.Component {
    state = {
        name: '',
        email: '',
        password: ''
    };

    //! Please don't remove this, still testing - chloe
    //=======================================================================
    // runValidation = () => {     const {name, email, password,
    // passwordConfirmation} = this.state;     const fields = [         {  value:
    // name,             verify: [                 { type: 'isPopulated',
    //          message: 'Please enter your name'              }             ]
    //   }, {             value: email,   verify: [                 {
    //      type: 'isPopulated',              message: 'Please enter your email
    // address'                 }, {                    type: 'isEmail',
    //         message: 'Please format your email address correctly'
    // }             ] }, {             value: password,             verify: [
    //           {                 type: 'isPopulated',                     message:
    // 'Please enter your password'                 }, {                     type:
    // 'isMatched',                     matchValue: passwordConfirmation,
    // message: 'Password and Confirmation must match'                 }, {
    //            type: 'isGreaterThanLength',                     length: 5,
    //              message: 'Password must be at least six characters'
    // }             ]         }, {             value: passwordConfirmation,
    //     verify: [                 {     type: 'isPopulated',
    // message: 'Please confirm your password'                 }             ]
    //   }     ];     const errorMessage = validateForm(fields);     if
    // (errorMessage) { showMessage({message: 'Check your form', description:
    // errorMessage, type: 'danger'});         return false;     }     return true;
    // } onSubmitRegistration = () => {     const {email, password} = this.state;
    // const isFormValid = this.runValidation();     if (!isFormValid) { return;
    // }     this.setState({isLoading: true});     FireBase .auth()
    // .createUserWithEmailAndPassword(email, password) .then(({user}) => {
    //    // Add the new user to the users table      FireBase
    // .database()                 .ref()    .child('users')
    // .push({email: this.state.email, uid: user.uid, name: this.state.name});
    //       // Update the user's metadata on firebase
    // //ser.updateProfile({displayName: this.state.name});
    // this.setState({isLoading: false});             return this         .props
    //             .navigation .navigate('Home_LI');         })
    // .catch((error) => { showMessage({message: 'Check your form', description:
    // `${error.message} (${error.code})`, type: 'danger'});
    // this.setState({isLoading: false});         })
    //=======================================================================

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
                        color="#eeeeee"
                        ref={(input) => {
                        this.nameInput = input;
                    }}
                        onSubmitEditing={() => this.emailInput.focus()}/>

                    <TextInput
                        style={styles.inputBox}
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}
                        ref={(input) => {
                        this.emailInput = input;
                    }}
                        onSubmitEditing={() => this.passwordInput.focus()}
                        placeholder='Email'
                        placeholderTextColor="#eeeeee"
                        autoCapitalize='none'
                        color="#eeeeee"
                        keyboardType="email-address"/>
                    <TextInput
                        style={styles.inputBox}
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}
                        placeholder='Password'
                        placeholderTextColor="#eeeeee"
                        secureTextEntry={true}
                        ref={(input) => {
                        this.passwordInput = input;
                    }}
                        onSubmitEditing={() => this.passwordInput.focus()}
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
        //borderColor: '#FFA611', borderWidth: 1,
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
