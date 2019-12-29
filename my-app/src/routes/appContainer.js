import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import * as React from 'react';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/homeScreen';
import DiscoverScreen from '../screens/discoverScreen';
\import ProfileScreen from '../screens/profileScreen';
import SignupScreen from '../screens/signupScreen';
import LoginScreen from '../screens/loginScreen';

const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Discover: DiscoverScreen,
    Profile: ProfileScreen,
  },
  {
    // here will be some styling 
  }
);

const AuthNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    Signup: {
      screen: SignupScreen,
      navigationOptions: () => ({
        header: null
      })
    },
  }
);

export default createAppContainer(createSwitchNavigator(
  {
    App: AppNavigator,
    Auth: AuthNavigator,
  },
  {
    initialRouteName: 'Auth'
  },
  {
    defaultNavigationOptions: {
      headerTintColor: 'white'
    },
  }
));
