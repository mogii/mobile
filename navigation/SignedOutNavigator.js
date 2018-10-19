import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import { Icon } from 'react-native-elements';
import LogIn from "../screens/LoginScreen";
import InitialScreen from "../screens/InitialScreen";
//
// import Home from './screens/HomeScreen';
// import Profile from './screens/SettingsScreen';

export const SignedOut = createStackNavigator({
  InitialScreen: {
    screen: InitialScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#00bcd4',
        borderBottomWidth: 0,
      },
    }
  },
  LogIn: {
    screen: LogIn,
    navigationOptions: {
      title: "Sign In"
    }
  }
});
//
// export const SignedIn = createBottomTabNavigator({
//   Home: {
//     screen: Home,
//     navigationOptions: {
//       tabBarLabel: "Home",
//       tabBarIcon: ({ tintColor }) => (
//         <Icon name="rowing" size={30} color={tintColor} />
//       )
//     }
//   },
//   Profile: {
//     screen: Profile,
//     navigationOptions: {
//       tabBarLabel: "Profile",
//       tabBarIcon: ({ tintColor }) => (
//         <Icon name="user" size={30} color={tintColor} />
//       )
//     }
//   }
// });
