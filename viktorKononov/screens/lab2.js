import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react'
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native'

const Lab2 = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
      <Text>Вы нажали {count} раз</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>Нажми!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  /* Задний фон */
  bgText: {
    position: "absolute",
    width: 198,
    height: 43,
    left: 23,
    top: 60,
    
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 36,
    lineHeight: 43,
    display: "flex",
    alignItems: "center",
    
    color: "#B0B0B0"
  }
});

export default Lab2;