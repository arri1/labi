import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ImageBackground
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const {width} = Dimensions.get('screen');
const SIZE = width * 0.9;

const App: () => React$Node = () => {

  const [color1,setColor1]=useState("#f23030");

  const randomHex = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) 
    {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <ImageBackground source={{uri:'https://previews.123rf.com/images/franzidraws/franzidraws1511/franzidraws151100007/48042630-seamless-pattern-of-the-great-wave-off-kanagawa.jpg'}} 
                              style={{width: '100%', height: '100%'}}>
      <View style={styles.Block}>
        <View style = {styles.blockRow}>
          <TouchableOpacity onPress={() => { setColor1(randomHex()); }}>
            <View style = {{...styles.body, backgroundColor: color1}}/>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
  Block: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZE/2
  },
  body: {
    width: SIZE, 
    height: SIZE, 
    borderRadius: SIZE /2
  },
});

export default App;