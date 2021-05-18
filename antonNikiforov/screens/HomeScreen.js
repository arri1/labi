import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        HomeScreen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#00FFB3',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#FF00EF',
    textAlign: "center",
    fontSize: 20,
    fontFamily: "serif",
  }
});

export default HomeScreen;