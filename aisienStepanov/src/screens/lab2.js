import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import styles from '../styles/styles'

const Lab2 = () => {
    const [colorState, setColorState] = useState('white');

    const onBlackButton = () => {
        setColorState('black')
    }
    const onBlueButton = () => {
        setColorState('blue')
    }
    return (
        <View style={styles.container}>
            <View
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: colorState,
                }}
            />
            <Button title= "Black" color="black" onPress={onBlackButton} />
            <Button title = "Blue" color="blue"  onPress={onBlueButton} />
        </View>
    );
};

export default Lab2