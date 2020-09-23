
import React, {useStates} from 'react';

import { View, Text, StyleSheet, Button, TextInput} from 'react-native';


const App= () => {
  var str = "Жми"
  function strChange()
  {
        str = "Жми"
        alert("Молодец!");
  }
  return (
  <>
  <View style={styles.container}>
        <Button onClick={strChange} title = "Кнопка"/>
        <Text>ВАЙ АЙ Ю ДОН ВОРКИН?</Text>
  </View>
  </>
  );
};

const styles = StyleSheet.create({
container:{
flex:1,
alignItems: "center",
justifyContent: "center"}})
export default App;