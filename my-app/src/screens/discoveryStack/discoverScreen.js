import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import DetailScreen from '../detailsScreen';

function DiscoverScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Discover!</Text>
      <Button title="Discover Feed 1" onPress={() => { props.navigation.navigate('Details') }} />
      <Button title="Discover Feed 2" onPress={() => { props.navigation.navigate('Details') }} />
    </View>
  );
};

const DiscoverStack = createStackNavigator({
  Discover: DiscoverScreen,
  Details: DetailScreen
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default DiscoverStack;
