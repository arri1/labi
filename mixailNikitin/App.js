import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const App = () => {

  const [backgroundColor, setBackgroundColor] = useState('#DCDCDC')

  const randomColorCode=()=>
  {
    let ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    return ColorCode;
  }

  return (
    <View style = {[styles.body, { backgroundColor }]}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setBackgroundColor(randomColorCode());   
      }}>
        <Text style={styles.text}>
          Change color
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#F8F8FF',
    textAlign: "center",
    fontSize: 20,
    fontFamily: "serif",
  },
  button: {
    backgroundColor: '#000000',
    width: 150,
    height: 90,
    borderRadius: 20,
    padding: 20,
  }
});

export default App;
