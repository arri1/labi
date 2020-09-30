import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('white')
  return (
    <View style={[styles.body, { backgroundColor }]}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (backgroundColor == 'white') {
            setBackgroundColor('black')
          }
          else setBackgroundColor('white')
        }}
      >
        <Text style={styles.text}>Press Here</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    alignItems: "center",
    backgroundColor: "rgba(170,170,200,.3)",
    padding: 10
  },
  text:{
    color: '#9C846A',
    fontSize: 20,
    fontFamily: 'calibri',
    fontStyle: 'italic',
    fontWeight: 'bold'
  }
});

export default App;