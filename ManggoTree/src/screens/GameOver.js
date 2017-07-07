import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

class GameOver extends React.Component {
  goHome() {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View>
        <Text>Game Over!</Text>
        <Image source={this.props.image}/>
        <TouchableOpacity>
          <Text onPress={()=>{this.goHome()}}>Home</Text>
        </TouchableOpacity>
      </View>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    username: state.username,
    treeName: state.treeName,
    age: state.age,
    maxAge: state.maxAge,
    bearingAge: state.bearingAge,
    currentHarvest: state.currentHarvest,
    totalHarvest: state.totalHarvest,
    isHealthy: state.isHealthy,
    image: state.selectedImage,
  };
};

export default connect(mapStateToProps)(GameOver);
