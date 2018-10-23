import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ScanScreen from '../screens/BusinessCardScanner/Main';
import SettingsScreen from '../screens/SettingsScreen';

import ResultConfirmation from '../screens/BusinessCardScanner/ResultConfirmation';
import Colors from "../constants/Colors";
import {Icon} from "expo";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : 'md-home'
      }
    />
  ),
};

const ScanCardStack = createStackNavigator({
  Scan: {
    screen: ScanScreen,
    navigationOptions: {
      header: null,
    }
  },
  ResultConfirmation: {
    screen: ResultConfirmation,
    navigationOptions: {
      title: 'Add Partner',
    }
  },
}, {
  mode: 'modal',
});

ScanCardStack.navigationOptions = {
  tabBarLabel: 'Card Scanner',
  tabBarIcon: ({ focused }) => (
    <Icon.MaterialCommunityIcons
      name={'credit-card-scan'}
      size={26}
      style={{ marginBottom: -3 }}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  ScanCardStack,
  SettingsStack,
}, {
  initialRouteName: 'HomeStack',
  navigationOptions: ({navigation}) => {
  return ({
    tabBarVisible: navigation.state.key === 'HomeStack' || navigation.state.key === 'SettingsStack',
  });
  }
});
