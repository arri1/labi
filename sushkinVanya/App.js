import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {

  const buttonColors = [
    '#ffffff',
    '#7fffd4',
    '#00fa9a',
    '#ffa07a'
  ];

  let [currentCol,setCurrentCol] = useState('#000fff')

  const buttonColorReplacement = () => {
    setCurrentCol(buttonColors[Math.floor(Math.random()*buttonColors.length)]);
  }

  return(
    <View style = {styles.container}>
      <Button title="Мобильное приложение"
      color={currentCol}
      onPress={() => buttonColorReplacement()}/>
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App;
