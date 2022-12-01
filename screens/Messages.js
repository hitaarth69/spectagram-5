import React from 'react';
import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default function Messages() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.instuction}>
        Hitaarth Tanna
      </Text>
      <TouchableOpacity
        style={{ backgroundColor: 'white' }}>
        <Text style={{ fontSize: 20, color: 'Black' }}>New message</Text>
      </TouchableOpacity>

       <Text style={styles.container2}>
        Siya Aditya
      </Text>
      <TouchableOpacity
        style={{ backgroundColor: 'white' }}>
        <Text style={{ fontSize: 20, color: 'Black' }}>New message</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'Topleft',
    justifyContent: 'Topleft',
  },
  
  instuction:{
  color: 'Black',
  fontSize: 25,
},

container2 :{
  color: 'Black',
  fontSize: 25,
}
});