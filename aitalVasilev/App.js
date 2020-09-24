import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'

const App = () => {
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

            <View style={(styles.testView, { backgroundColor: colorState })} />
            <Button title="Make color red" color="red" onPress={onRedButton} />
            <Button title="Make color green" color="green" onPress={onGreenButton} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    testView: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: colorState
    }
})

export default App
