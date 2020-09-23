/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {

  const [color1,setColor1]=useState('#000000');
  const [color2,setColor2]=useState('#00FF00');
  const [color3,setColor3]=useState('#00FFFF');
  const [color4,setColor4]=useState('#FFA500');

  let randomHex = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

  return (
    
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>

  <View
  style = {styles.blockRow}>

    <TouchableOpacity
    onPress={() => {
      setColor1(randomHex());
    }}>

    <View
    style = {{
      backgroundColor: color1, 
      width: 120,
      height: 120}}>
    </View>

    </TouchableOpacity>

    <TouchableOpacity
    onPress={() => {
      setColor2(randomHex());
    }}>

    <View
    style = {{backgroundColor: color2, 
      width: 120,
      height: 120}}>
    </View>

    </TouchableOpacity>

  </View>

  <View
  style = {styles.blockRow}>

    <TouchableOpacity
    onPress={() => {
      setColor3(randomHex());
    }}>

    <View
    style = {{backgroundColor: color3, 
      width: 120,
      height: 120}}>
    </View>

    </TouchableOpacity>

    <TouchableOpacity
    onPress={() => {
      setColor4(randomHex());
    }}>
  
    <View
    style = {{backgroundColor: color4, 
      width: 120,
      height: 120}}>
    </View>

    </TouchableOpacity>

  </View>
    
  </View>
  
    
  );
};

const styles = StyleSheet.create({

  scrollView: {
    backgroundColor: Colors.lighter,
  },

  body: {
    backgroundColor: Colors.white,
  },

  blockRow: {
    flexDirection: 'row',
  },

});

export default App;
