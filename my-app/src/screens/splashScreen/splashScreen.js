import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, StatusBar } from 'react-native';
import { connect } from 'react-redux';

function splashScreen(props) {

  // set time to check token, and navigate to the proper screen
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate(props.authToken ? 'App' : 'Auth');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <StatusBar barStyle='default' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const mapStateToProps = state => {
  return {
    // only map needed states here
    authToken: state.loginReducer.authToken,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // only map needed dispatchs here
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(splashScreen);
