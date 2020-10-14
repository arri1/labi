import React, {useState} from 'react';
import { 
  View, 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  Button 
} from 'react-native';


 
const App = () =>{    
  const handle = () => false
  const [backgroundColor, setBackgroundColor] = useState('black')
  let color = 0;
  return(
  <View style={[styles.main, { backgroundColor }]}>
    <View style={styles.fixToText}>
    <Button 
      onPress={() =>{
          color = Math.floor(Math.random() * 99999);
          setBackgroundColor(color)
        }}
      title="color"
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
  fixToText: {},
  main:{
    margin: 50,
  },
})

export default App;