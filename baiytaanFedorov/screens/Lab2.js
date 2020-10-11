import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';

const Lab2 = () => {
  const [backgroundColor, setBackgroundColor] = useState('#f2f2f2')
  return (
    <View style={[styles.body, { backgroundColor }]}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (backgroundColor == '#f2f2f2') {
            setBackgroundColor('#000')
          } else {
            setBackgroundColor('#f2f2f2')
          }
        }}>
        <Text style={styles.text}>
          Press Here
        </Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    alignItems: "center",
    backgroundColor: "rgba(170,170,170,.3)",
    padding: 10
  },
  text: {
    color: '#9C846A',
    fontSize: 20,
    fontFamily: 'calibri',
    fontStyle: 'italic',
    fontWeight: 'bold'
  }
});

export default Lab2;