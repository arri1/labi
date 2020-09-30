import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const {width} = Dimensions.get('screen');
const SIZE = width * 0.9;

const App: () => React$Node = () => {

  const [color1,setColor1]=useState('#000000');

  let randomHex = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) 
    {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <View style={styles.Block}>
      <View style = {styles.blockRow}>
        <TouchableOpacity onPress={() => { setColor1(randomHex()); }}>
          <View style = {{ backgroundColor: color1, width: SIZE, height: SIZE}}/>
        </TouchableOpacity>
      </View>
    </View>
  
    
  );
};

const styles = StyleSheet.create({
  Block: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  body: {
    backgroundColor: Colors.white,
  },
  blockRow: {
    flexDirection: 'row',
  },

});

export default App;