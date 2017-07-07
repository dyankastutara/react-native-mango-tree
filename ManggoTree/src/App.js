import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  AppRegistry
} from 'react-native';

import HomeScreen from './screens/Home';
import WelcomeScreen from './screens/Welcome';


const App = StackNavigator({
  Welcome: {screen : WelcomeScreen},
  Home: {screen : HomeScreen}
})

export default App;
