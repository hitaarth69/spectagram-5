import React, { Component } from 'react';
import { Text, View,TouchableOpacity} from 'react-native';

export default class Settings extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                    
                }}>

                 <TouchableOpacity
        onPress={() => ('Hello, world!')}
        style={{ backgroundColor: 'azure' }}>
        <Text style={{ fontSize: 20, color: 'Black' }}>Delete Account</Text>
      </TouchableOpacity>
                
            </View>
        )
    }
}