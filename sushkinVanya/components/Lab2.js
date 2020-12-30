import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Button,
} from 'react-native';


const App: () => React$Node = () => {

  const buttonColors = [
    '#ffffff',
    '#7fffd4',
    '#00fa9a',
    '#ffa07a'
  ];

  const [currentCol,setCurrentCol] = useState('#000fff')

  const buttonColorReplacement = () => {
    const randomIndex = Math.floor(Math.random()*buttonColors.length);
    setCurrentCol(buttonColors[randomIndex]);
  }

  return(
    <View style = {styles.container}>
      <Button 
      title="Нажмите что бы поменять цвет кнопки"
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