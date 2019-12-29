import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import DetailScreen from './detailsScreen';

function ProfileScreen(props) {

  const logoutHandler = () => {
    props.navigation.navigate('Auth');
  }

  return (
    <View style={styles.container}>
      <Text>Personal Profile !</Text>
      <Button title="Log out" onPress={logoutHandler} />
    </View>
  );
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
  Details: DetailScreen
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ProfileStack;
