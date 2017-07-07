import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';

import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';

class WelcomeScreen extends Component{
  constructor(){
    super();
    this.state = {
      username:'',
      treename:'',
      message:''
    }
  }

  start() {
    if(this.state.username.length > 0 && this.state.treename.length > 0) {
      this.setState({
        message: '',
      });
    } else {
      this.setState({
        message: 'Username and Tree Name are required',
      });
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
            style={{height: 30,}}
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
          />
        </View>
        <View>
          <Text>Tree Name</Text>
          <TextInput
            style={{height: 30}}
            onChangeText={(treename) => this.setState({treename})}
            value={this.state.treename}
          />
        </View>
        <Button
          onPress={()=>{}}
          title="Start"
          color="#841584"
        />
      </View>
    )
  }
}

export default WelcomeScreen;
