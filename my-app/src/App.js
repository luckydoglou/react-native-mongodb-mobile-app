import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import RootNavigation from './navigation/rootNavigation';
import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigation/>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
