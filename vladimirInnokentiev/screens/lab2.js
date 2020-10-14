import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const {width} = Dimensions.get('screen');
const SIZE = width * 0.9;

const App: () => React$Node = () => {

  const [color1,setColor1]=useState(Colors.white);

  const randomHex = () => {
    const letters = "0123456789ABCDEF";
    const color = "#";
    for (const i = 0; i < 6; i++) 
    {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <View style={styles.Block}>
      <View style = {styles.blockRow}>
        <TouchableOpacity onPress={() => { setColor1(randomHex()); }}>
          <View style = {{...styles.body, backgroundColor: color1}}/>
        </TouchableOpacity>
      </View>
    </View>
  
    
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