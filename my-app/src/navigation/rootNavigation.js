//
// This file used as a navigator for all top level screens.
//

import React from 'react';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from '../screens/homeStack/homeScreen';
import DiscoverScreen from '../screens/discoverStack/discoverScreen';
import CreateEventScreen from '../screens/createEventStack/createEventScreen';
import MessageScreen from '../screens/messageStack/messageScreen';
import ProfileScreen from '../screens/profileStack/profileScreen';
import SignupScreen from '../screens/signupStack/signupScreen';
import LoginScreen from '../screens/loginStack/loginScreen';
import splashScreen from '../screens/splashScreenStack/splashScreen';

const AppNavigator = createBottomTabNavigator(
  {
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        // some styling for profile screen
      }
    },
    Home: {
      screen: HomeScreen,
    },
    Discover: {
      screen: DiscoverScreen,
    },
    Create: {
      screen: CreateEventScreen,
    },
    Message: {
      screen: MessageScreen,
    },
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
    AuthLoading: splashScreen,
    Auth: AuthNavigator,
    App: AppNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
    //initialRouteName: 'Auth',
    //initialRouteName: 'App',
  },
  {
    defaultNavigationOptions: {
      headerTintColor: 'white'
    },
  }
));

// const TabNavigator = createBottomTabNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//       navigationOptions: {
//         tabBarLabel: 'Home',
//         tabBarOptions: {
//           activeTintColor: "teal",
//           style:{
//             height:60
//           }
//         },
//         tabBarIcon: ({tintColor, activeTintColor}) => (
//           <MaterialIcons name="home" size={30} color={tintColor} />
//           )
//       }
//     },
//     Discover:{
//       screen: DiscoverScreen,
//       navigationOptions: {
//         tabBarLabel: 'Discover',
//         tabBarOptions: {
//           activeTintColor: "teal",
//         },
//         tabBarIcon: ({tintColor, activeTintColor}) => (
//           <MaterialIcons name="search" size={30} color={tintColor} />
//           )
//       }
//     },
//     Create:{
//       screen: CreateEventScreen,
//       navigationOptions: {
//         tabBarLabel: 'Create',
//         tabBarOptions: {
//           activeTintColor: "teal",
//         },
//         tabBarIcon: ({tintColor, activeTintColor}) => (
//           <MaterialIcons name="add" size={30} color={tintColor} />
//           )
//       }
//     },
//     Message:{
//       screen: MessageScreen,
//       navigationOptions: {
//         tabBarLabel: 'Messages',
//         tabBarOptions: {
//           activeTintColor: "teal",
//         },
//         tabBarIcon: ({tintColor, activeTintColor}) => (
//           <MaterialCommunityIcons name="message-outline" size={25} color={tintColor} />
//           )
//       }
//     },
//     Profile:{
//       screen: ProfileScreen,
//       navigationOptions:{
//         tabBarLabel: 'Profile',
//         tabBarOptions: {
//           activeTintColor: "teal",
//         },
//         tabBarIcon: ({tintColor, activeTintColor}) => (
//           <MaterialCommunityIcons name="account" size={30} color={tintColor} />
//           )
//       }
//     }
//   }
// );