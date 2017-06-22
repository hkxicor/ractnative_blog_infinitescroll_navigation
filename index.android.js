import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import BlogList from './src/Component/BlogList';
import BlogView from './src/Component/BlogView';

const SimpleApp = StackNavigator({
  Home: { screen: BlogList },
  BlogView: { screen: BlogView }
});

AppRegistry.registerComponent('witpay', () => SimpleApp);
