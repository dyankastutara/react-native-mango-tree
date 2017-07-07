import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';

class HomeScreen extends Component{
  static navigationOptions = {
    title: 'Home',
  }
  constructor(){
    super();
    this.state = {
      username:'',
      treename:''
    }
  }
  render(){
    return(
      <View>
        <View>
          <Text>Home</Text>
        </View>

      </View>
    )
  }
}

export default HomeScreen;
