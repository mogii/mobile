import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { SignedOut } from './SignedOutNavigator';
import MainTabNavigator from './MainTabNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  AuthLoading: AuthLoadingScreen,
  Auth: SignedOut,
  Main: MainTabNavigator,
});