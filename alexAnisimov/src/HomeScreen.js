import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>
        HomeScreen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    textAlign: "center",
    fontSize: 20,
  }
});

export default HomeScreen;