import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const lab2 = () => {
  const [backgroundColor, setBackgroundColor] = useState('cyan')
  return (
    <View style={[styles.main, { backgroundColor }]}>
      <Text style={styles.text}>Ассаламалейкумм</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          let s = Math.floor(Math.random() * 4);
          if (s == 3) {
            setBackgroundColor('yellow')
            return null
          }
          if (s == 2) {
            setBackgroundColor('green')
            return null
          }
          if (s == 1) {
            setBackgroundColor('blue')
            return null
          }
        }}
      >
        <Text style={styles.square}></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    alignItems: "center",
    backgroundColor: "red",
    padding: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 40,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'times new roman',
    fontStyle: 'italic',
  },
  square: {
    width: 200,
    height: 100,
    backgroundColor: "red",
  },
});

export default lab2;
