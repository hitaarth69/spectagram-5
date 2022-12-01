import React from 'react';
import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Profile from '../assets/image_7.jpg';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={Profile} style={styles.Profile} />
      <Text style={styles.instuction}>
        Prarthana Tanna
      </Text>
      <TouchableOpacity
        onPress={() => ('Hello, world!')}
        style={{ backgroundColor: 'white' }}>
        <Text style={{ fontSize: 20, color: 'Black' }}>Edit profile</Text>
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
  Profile:{
    width: 400,
    height: 400,
    borderRadius: 400/ 2 
  },
  instuction:{
  color: 'pink',
  fontSize: 25,
}
});