import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, Button, Alert } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import styles from '../styles/Temp';
import axios from 'axios';

function LoginScreen(props) {
  const loginUri = 'http://localhost:5000/user/login';

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    const loginData = {
      username: username,
      password: password
    }
    console.log(loginData);

    // send login request
    axios.post(loginUri, loginData)
      .then(res => {
        console.log(`Login feedback: ${res.data}`);

        // direct to home screen or user not found
        if (res.data === "User Not Found") {
          Alert.alert("Username or Password Not Match");
        } else {
          props.navigation.navigate('App');
        }
      })
      .catch(err => console.error(err));
  };

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

export default LoginScreen;
