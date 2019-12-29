import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function DetailScreen() {
  return (
    <View style={styles.container}>
      <Text>Some Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default DetailScreen;
