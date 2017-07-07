import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

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
      this.props.start(this.state.username, this.state.treename)
      this.props.navigation.navigate('Simulation');
    } else {
      this.setState({
        message: 'Username and Tree Name are required',
      });
    }
  }

  render(){
    console.log(this.props);
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
          onPress={() => this.start() }
          title="Start"
          color="#841584"
        />
        <Text>{this.state.message}</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
    treename: state.treename,
    maxAge: state.maxAge,
    bearingAge: state.bearingAge,
    currentHarvest: state.currentHarvest,
    totalHarvest: state.totalHarvest,
    isHealthy: state.isHealthy,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    start: (username, treename) => dispatch(initiate(username, treename)),
  };
}

const Home = connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);

export default Home;
