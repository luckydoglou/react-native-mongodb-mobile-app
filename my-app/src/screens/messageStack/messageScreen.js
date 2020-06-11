import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import DetailScreen from './tempDetailsScreen';

function MessageScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Messages!</Text>
      <Button title="Message Feed 1" onPress={() => { props.navigation.navigate('Details') }} />
      <Button title="Message Feed 2" onPress={() => { props.navigation.navigate('Details') }} />
    </View>
  );
};

const MessageStack = createStackNavigator({
  Message: MessageScreen,
  Details: DetailScreen
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MessageStack;