import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Button } from 'react-native';


 
const App = () =>{    
  const handle = () => false
  return(
  <View>
    <View style={styles.fixToText}>
    <Button
      title="button"
    />
    <Button
      onPress = {handle}
      title="звук"
    />
    </View>
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style = {styles.text}>
             Button
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
   },
   text: {
      borderWidth: 1,
      padding: 25,
      borderColor: 'black',
      backgroundColor: 'red'
   },
   fixToText: {

  },
})

export default App;