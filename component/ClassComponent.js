import React, {Component} from 'react';
import {Text, View} from 'react-native';
export default class ClassComponent extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize: 20, color: 'red', margin: 'auto'}}>
          Hello from class component
        </Text>
      </View>
    );
  }
}
