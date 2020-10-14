/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>

  <View
  style = {styles.blockRow}>
    <View
    style = {styles.rectangleBlack}>
    
    </View>
    <View
    style = {styles.rectangleOrange}>

    </View>
  </View>

  <View
  style = {styles.blockRow}>
    <View
    style = {styles.rectangleGreen}>

    </View>
    <View
    style = {styles.rectangleCyan}>

    </View>
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
  rectangleBlack: {
    width: 120,
    height: 120,
    backgroundColor: "#000000",
  },

  rectangleGreen: {
    width: 120,
    height: 120,
    backgroundColor: "#00FF00",
  },

  rectangleCyan: {
    width: 120,
    height: 120,
    backgroundColor: "#00FFFF",
  },

  rectangleOrange: {
    width: 120,
    height: 120,
    backgroundColor: "#FFA500",
  },

  blockRow: {
    flexDirection: 'row',
  },

});

export default App;
