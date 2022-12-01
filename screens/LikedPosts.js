import React from 'react';
import { Text, View,
    Image,StyleSheet} from 'react-native';
  import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

import image from '../assets/image_2.jpg';
import image_2 from '../assets/image_4.jpg';


export default function LikedPost() {
  return (
    <View style={styles.container}>
      <Image source={image} style={{ width: 420, height: 159 }}   />
 <Text style={{ color: '#888', fontSize: 18 }}>
        This post is from Hitaarth Tanna
      </Text>

      <Image source={image_2} style={{ width: 420, height: 159 }} />
 <Text style={{ color: '#888', fontSize: 18 }}>
        This post is from Siya Aditya
      </Text>
     
                    
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'left',
    justifyContent: 'left',
  },
});