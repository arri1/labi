import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';

const Apps = () => {
  const [colorState, setColorState] = useState('red');

  onGreenButton = () => {
      setColorState('green')
  }
  onRedButton = () => {
      setColorState('red')
  }
  const onBlueButton = () => {
    setColorState('blue')
  }
  return (
      <View style={styles.container}>
      <Text>Test app</Text>

      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: colorState,
        }}
      />
      <Button title="Red" color="red" onPress={onRedButton} />
      <Button title="Green" color="green" onPress={onGreenButton} />
      <Button title="Blue" color="blue" onPress={onBlueButton} />
    </View>
  );
};

const styles = StyleSheet.create ({
   
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Apps