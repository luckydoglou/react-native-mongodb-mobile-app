import React, { useState, useRef, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import styles from '../styles/Temp';
import { login } from '../actions/loginActions';

function LoginScreen(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // useRef hook to check whether the component has just mounted or updated
  // Link: https://dev.to/savagepixie/how-to-mimic-componentdidupdate-with-react-hooks-3j8c
  const didMountRef = useRef(false);
  // useEffect()to check if states have changed
  // 2nd argument is the list of states you want to watch for
  useEffect(() => {
    if (didMountRef.current) {
      // if login success, go to home screen
      if (props.isAuth) {
        props.navigation.navigate('App');
      } else if (!props.isLoading && !props.isAuth) {
        Alert.alert("Username or Password Not Match!");
      }
    } else {
      didMountRef.current = true;
    }
  }, [props.isLoading, props.isAuth]);

  // this function make sure props.login() only be called once
  const loginHandler = () => {
    const loginData = {
      username: username,
      password: password,
    }
    // calling props.login() dispatch function
    props.login(loginData);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Login</Text>
      <TextInput style={styles.TextInput} placeholder='User Name' onChangeText={text => setUsername(text)} />
      <TextInput style={styles.TextInput} placeholder='Password' secureTextEntry={true} onChangeText={text => setPassword(text)} />
      <Button title="Log In" onPress={loginHandler} />
      <Button title="Sign Up" onPress={() => { props.navigation.navigate('Signup') }} />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    // only map needed states
    isLoading: state.loginReducer.isLoading,
    isAuth: state.loginReducer.isAuth,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    // only map needed dispatches
    login: loginData => dispatch(login(loginData)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
