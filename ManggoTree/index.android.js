/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './src/App'

export default class ManggoTree extends Component {
  render() {
    return (
      <View>
        <Text>test</Text>
        <App />
      </View>
    );
  }
}

AppRegistry.registerComponent('ManggoTree', () => ManggoTree);
