import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';

import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';

class WelcomeScreen extends Component{
  static navigationOptions = {
    title: 'Welcome',
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
          <Text>Welcome!</Text>
        </View>
        <View>
          <Text>Username</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
          />
        </View>
        <View>
          <Text>Tree Name</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(treename) => this.setState({treename})}
            value={this.state.treename}
          />
        </View>
        <View>
          {/* <Button
            title="Start"
            color="#841584"
          /> */}
        </View>
      </View>
    )
  }
}

export default WelcomeScreen;
