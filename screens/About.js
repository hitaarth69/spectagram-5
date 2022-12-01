import React, { Component } from 'react';
import { Text, View, } from 'react-native';


export default class About extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          color: 'green'
        }}>
        <Text>
          This app is for posting images and videos and for conversation have fun
        </Text>

        
                
      </View>
    );
  }
}



