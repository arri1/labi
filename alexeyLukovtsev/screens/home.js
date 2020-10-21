import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const home = () => {
  return (
    <View style={[styles.main]}>
      <Text style={styles.text}>Home sweet home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 40,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'times new roman',
    fontStyle: 'italic',
  },
});

export default home;
