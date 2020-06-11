import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TextInput, StyleSheet, Button, Alert, ShadowPropTypesIOS } from 'react-native';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
//import axios from 'axios';
import styles from './styles/temp';
import { login } from './actions/loginActions';

function LoginScreen(props) {
  const [username, putUsername] = useState("");
  const [password, putPassword] = useState("");

  // useRef hook to check whether the component has just mounted or updated
  // Link: https://dev.to/savagepixie/how-to-mimic-componentdidupdate-with-react-hooks-3j8c
  const didMountRef = useRef(false);
  // useEffect()to check if states have changed
  // 2nd argument is the list of states you want to watch for
  useEffect(() => {
    console.log("loginScreen.js, props.isAuth: ", props.isAuth);
    console.log("loginScreen.js, props.isLoading: ", props.isLoading);
    if (didMountRef.current) {
      // if login success, go to home screen
      if (props.isAuth) {
        props.navigation.navigate('App');
      } else if (!props.isAuth && !props.isLoading) {
        Alert.alert(props.errMsg);
      }
    } else {
      didMountRef.current = true;
    }
  }, [props.isAuth, props.isLoading]);

  // this function make sure props.login() only be called once
  const loginHandler = () => {
    const loginData = {
      username: username,
      password: password
    }
    // calling login() dispatch function
    props.login(loginData);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Login</Text>
      <TextInput style={styles.TextInput} id='username' placeholder='Username' onChangeText={text => putUsername(text)} autoCapitalize='none' />
      <TextInput style={styles.TextInput} id='password' placeholder='Password' secureTextEntry={true} onChangeText={text => putPassword(text)} autoCapitalize='none' />
      <Button title="Log In" onPress={loginHandler} />
      <Button title="Sign Up" onPress={() => { props.navigation.navigate('Signup') }} />
    </View>
  );
};

// constrain input data types, not used for now
// LoginScreen.propTypes = {
//   login: PropTypes.func.isRequired,
//   authenticated: PropTypes.bool
// };

const mapStateToProps = state => {
  return {
    // only map needed states here
    isLoading: state.loginReducer.isLoading,
    isAuth: state.loginReducer.isAuth,
    errMsg: state.loginReducer.errMsg,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    // only map needed dispatches here
    login: loginData => dispatch(login(loginData)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);