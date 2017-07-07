import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import store from './store/configureStore';
import Welcome from './screens/Welcome';
import Simulation from './screens/Simulation';
import GameOver from './screens/GameOver';

const AppNav = StackNavigator({
  Home: { screen: Welcome },
  Simulation: { screen: Simulation },
  GameOver: { screen: GameOver },
}, { headerMode: 'none' });


const AppStore = () => {
  return (
    <Provider store={store}>
      <AppNav />
    </Provider>
  );
}

export default AppStore;
