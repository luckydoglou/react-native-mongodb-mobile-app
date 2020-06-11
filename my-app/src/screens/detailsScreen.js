// import { Colors } from 'react-native/Libraries/NewAppScreen';
'use strict';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  //for login and signup inputs
  TextInput: {
    height: 40,
    width: 300,
    borderColor: 'grey',
    borderBottomWidth: 1,
    margin: 10
  },
  //for login and signup title
  titleText: {
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default styles; 