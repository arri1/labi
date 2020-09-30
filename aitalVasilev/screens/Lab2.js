import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import styles from '../styles/styles'

export default Lab2 = () => {
    const [colorState, setColorState] = useState('green')

    onGreenButton = () => {
        setColorState('green')
    }
    onRedButton = () => {
        setColorState('red')
    }

    return (
        <View style={styles.container}>
            <Text>Test app</Text>

            <View style={{ ...styles.testView, backgroundColor: colorState }} />
            <Button title="Make color red" color="red" onPress={onRedButton} />
            <Button title="Make color green" color="green" onPress={onGreenButton} />
        </View>
    )
}
