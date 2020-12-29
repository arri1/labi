import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import styles from '../styles/styles'

const Lab2 = () => {
  const [colorState, setColorState] = useState('red');
  const onGreenButton = () => {
    setColorState('green')
}
const onRedButton = () => {
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

export default Lab2