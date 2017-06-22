import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import BlogList from './Component/BlogList';
import BlogView from './Component/BlogView'

class App extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return (
      <View >
        <BlogView />
      </View>
    );
  }
}
