import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import styles from '../styles/Temp';
import { signup } from '../actions/signupActions';

function SignupScreen(props) {
  // initialize states
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // useRef hook to check whether the component has just mounted or updated
  // Link: https://dev.to/savagepixie/how-to-mimic-componentdidupdate-with-react-hooks-3j8c
  const didMountRef = useRef(false);
  // useEffect()to check if states have changed
  // 2nd argument is the list of states you want to watch for
  useEffect(() => {
    if (didMountRef.current) {
      // if signup success, go to login screen
      if (props.isAuth) {
        props.navigation.navigate('Login');
      } else if (!props.isAuth && !props.isLoading) {
        Alert.alert("Unable to Sign Up User!");
      }
    } else {
      didMountRef.current = true;
    }
  }, [props.isAuth, props.isLoading]);

  // this function make sure props.login() only be called once
  const signupHandler = () => {
    const signupData = {
      username: username,
      firstname: firstname,
      lastname: lastname,
      password: password,
      email: email
    }
    // calling signup() dispatch
    props.signup(signupData);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>SignUp Screen </Text>
      <TextInput style={styles.TextInput} placeholder='User Name' onChangeText={text => setUsername(text)} value={username} />
      <TextInput style={styles.TextInput} placeholder='First Name' onChangeText={text => setFirstname(text)} value={firstname} />
      <TextInput style={styles.TextInput} placeholder='Last Name' onChangeText={text => setLastname(text)} value={lastname} />
      <TextInput style={styles.TextInput} placeholder='Password' secureTextEntry={true} onChangeText={text => setPassword(text)} value={password} />
      {/* <TextInput style={styles.TextInput} placeholder='Re-enter Password' secureTextEntry={true}/> */}
      <TextInput style={styles.TextInput} placeholder='Email' onChangeText={text => setEmail(text)} value={email} />
      <Button title="Sign Up" onPress={signupHandler} />
      <Button title="Login Page" onPress={() => props.navigation.navigate('Login')} />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    // only map needed states here
    isLoading: state.signupReducer.isLoading,
    isAuth: state.signupReducer.isAuth,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    // only map needed dispatches here
    signup: signupData => dispatch(signup(signupData)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);