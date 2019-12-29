import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import DetailScreen from './detailsScreen';

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Home!</Text>
      <Button title="Home Feed 1" onPress={() => {props.navigation.navigate('Details')}} />
      <Button title="Home Feed 2" onPress={() => {props.navigation.navigate('Details')}} />
    </View>
  );
};

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailScreen
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default HomeStack;
