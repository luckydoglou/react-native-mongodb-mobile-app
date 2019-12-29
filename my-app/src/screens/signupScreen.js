import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';

import styles from '../styles/Temp';

function SignupScreen(props) {
  const signupUri = 'http://localhost:5000/user/signup';

  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = () => {
    const user = {
      username: username,
      firstname: firstname,
      lastname: lastname,
      password: password,
      email: email
    }

    console.log(user);

    //  send signup request through http protcol
    axios.post(signupUri, user)
      .then(res => {

        console.log(`frontend: ${res.data}`);

        // notify user if sign up success

      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>SignUp Screen </Text>
      <TextInput style={styles.TextInput} placeholder='User Name' onChangeText={text => setUsername(text)} />
      <TextInput style={styles.TextInput} placeholder='First Name' onChangeText={text => setFirstname(text)} />
      <TextInput style={styles.TextInput} placeholder='Last Name' onChangeText={text => setLastname(text)} />
      <TextInput style={styles.TextInput} placeholder='Password' secureTextEntry={true} onChangeText={text => setPassword(text)} />
      {/* <TextInput style={styles.TextInput} placeholder='Re-enter Password' secureTextEntry={true}/> */}
      <TextInput style={styles.TextInput} placeholder='Email' onChangeText={text => setEmail(text)} />
      <Button title="Sign Up" onPress={submitHandler} />
      <Button title="Login Page" onPress={() => { props.navigation.navigate('Login') }} />
    </View>
  );
};

export default SignupScreen;
